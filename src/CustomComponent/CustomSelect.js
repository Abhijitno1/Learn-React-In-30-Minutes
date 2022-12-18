import React, {useState, useEffect, useRef} from 'react';
import './SelectStyles.css';

export default function CustomSelect({selValue, options}) {
    const [sselValue, setSselValue] = useState();
    const [soptions, setSoptions] = useState();
    const [selText, setSelText] = useState();
    const [isShow, setIsShow] = useState(false);
    const customSelectOptions = useRef();

    useEffect(()=>{
        setSelectedOption(selValue);
 
    }, [selValue]);
    useEffect(() => {
        setSoptions([...options]);
    }, [selValue, options]);

    function setSelectedOption(whichValue) {
        setSelText('');
        soptions && soptions.forEach(opt => {
            if (opt.value == whichValue) {
                setSselValue(whichValue);
                setSelText(opt.text);
                opt.selected = true;
                //optionsCustomElement.scrollIntoView({ block: "nearest" });
            }
            else
                opt.selected = false;
            });
    }

    function getIndex4Value(whichValue) {

        for(var i = 0; i<soptions.length; i++) {
            if (soptions[i].value == whichValue)
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

    function onToggleDropdown(e) {
        setIsShow(prevVal => { 
            showDropdown(!prevVal);
            return !prevVal; 
        })
    }
    
    function onOptionSelected(e) {
        setSelectedOption(e.target.getAttribute('data-value'));
        setSoptions([...soptions]);
        showDropdown(false);
    }

    let debounceTimeout
    let searchTerm = sselValue;
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
                let prevValue = soptions[prevIndex].value;
                setSelectedOption(prevValue);
                break; 
            case "ArrowDown":
                var curSelIndex = getIndex4Value(sselValue);
                let nextIndex= curSelIndex<(soptions.length-1)? (curSelIndex+1) : (soptions.length-1);
                let nextValue = soptions[nextIndex].value;
                setSelectedOption(nextValue);
                break;
            case "Backspace":
                if (sselValue.length>0)
                    setSselValue(sselValue.substring(0, sselValue.length-1))
                break;
            default:
                searchTerm += e.key;
                clearTimeout(debounceTimeout)
                debounceTimeout = setTimeout(() => {
                    searchTerm = ""
                  }, 500)
          
                const searchedOption = soptions.find(option => {
                    return option.text.toLowerCase().startsWith(searchTerm)
                  })
                  if (searchedOption) {
                    setSelectedOption(searchedOption.value)
                  }
                break;
        }
    }

    function onValueChanged(e) {
        let searchTerm = e.target.value;
        setSelText(searchTerm);
        //Also search amongst available options in the list
    }

    function onDropdownBlur(e) {
        showDropdown(false);
    }

    return (
        <div id="customElement" className="custom-select-container" tabIndex="0" onKeyDown={onValueTyped}>
            <span id="labelElement" className="custom-select-value" onClick={onToggleDropdown}
                >{selText}</span> 
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