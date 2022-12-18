import React, {useState, useEffect, useRef} from 'react';
import './SelectStyles.css';

export default function CustomSelect({selValue, options}) {
    const [sselValue, setSselValue] = useState();
    const [soptions, setSoptions] = useState();
    const [selText, setSelText] = useState();
    const customSelectOptions = useRef();

    useEffect(()=>{
        setSelectedOption(selValue);
 
    }, [selValue]);
    useEffect(() => {
        setSoptions([...options]);
    }, [selValue, options]);

    function setSelectedOption(whichValue) {
        setSelText('');
        options.forEach(opt => {
            if (opt.value == whichValue) {
                setSselValue(whichValue);
                setSelText(opt.text);
                opt.selected = true;
            }
            else
                opt.selected = false;
            });
    }

    function getIndex4Value(whichValue) {

        for(var i = 0; i<options.length; i++) {
            if (options[i].value == whichValue)
               return i;
        }
        return -1;
    }

    function showDropdown(isShow) {
        if (isShow)
            customSelectOptions.current.classList.add('show');
        else
            customSelectOptions.current.classList.remove('show');
    }

    function onOptionSelected(e) {
        setSelectedOption(e.target.getAttribute('data-value'));
        setSoptions([...options]);
        showDropdown(false);
    }

    function onValueTyped(e) {
        switch(e.code) {
            case "Space":
                showDropdown(true);
                break;
            case "Escape":
            case "Enter":
                showDropdown(false);
                break;
            case "ArrowUp":
                var curSelIndex = getIndex4Value(sselValue);
                let prevIndex= curSelIndex>0? curSelIndex-1 : 0;
                let prevValue = options[prevIndex].value;
                setSelectedOption(prevValue);
                break; 
            case "ArrowDown":
                var curSelIndex = getIndex4Value(sselValue);
                let nextIndex= curSelIndex<(options.length-1)? (curSelIndex+1) : (options.length-1);
                let nextValue = options[nextIndex].value;
                setSelectedOption(nextValue);
                break; 
        }
        
    }

    function onValueChanged(e) {
        let searchTerm = e.target.value;
        setSelText(searchTerm);
        //Also search amongst available options in the list
        const searchedOption = options.find(option => {
            return option.text.toLowerCase().startsWith(searchTerm)
          })
          if (searchedOption) {
            setSelectedOption(searchedOption.value)
          }
    }

    function onDropdownClicked(e) {
        showDropdown(true);
    }
    function onDropdownBlur(e) {
        showDropdown(false);
    }

    return (
        <div id="customElement" className="custom-select-container">
            <input type="text" id="labelElement" className="custom-select-value" onClick={onDropdownClicked} value={selText}
                 onChange={onValueChanged} onKeyDown={onValueTyped}></input> 
            <ul id="optionsCustomElement" className="custom-select-options" ref={customSelectOptions}>
                {
                    soptions && soptions.map((opt, idx) => 
                        <li className= {"custom-select-option " + (opt.selected? 'selected': '')}
                            key={idx} data-value={opt.value} onClick={onOptionSelected}>{opt.text}</li>               
                )}
            </ul>
        </div>
    );
}