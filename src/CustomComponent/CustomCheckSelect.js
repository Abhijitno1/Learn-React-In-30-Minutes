import React, {useState, useEffect, useRef} from 'react';
import './CheckSelectStyles.css';

export default function CustomCheckSelect({selValues, options}) {
    const [sselValues, setSselValues] = useState();
    const [soptions, setSoptions] = useState();
    const [selText, setSelText] = useState();
    const [filterText, setFilterText] = useState();
    const customSelectOptions = useRef();

    useEffect(()=>{
        setSelectedOptions();
 
    }, [selValues]);

    useEffect(() => {
        setSoptions([...options]);
    }, [selValues, options]);

    function setSelectedOptions() {
        let seltextcoll = '';
        setSelText(seltextcoll);

        soptions && soptions.forEach(opt => {
            if (opt.selected)
                seltextcoll += opt.text + ',';
        });
        setSelText(seltextcoll);
        //optionsCustomElement.scrollIntoView({ block: "nearest" });
    }

    function showDropdown(isShow) {
        if (isShow)
            customSelectOptions.current.classList.add('show');
        else
            customSelectOptions.current.classList.remove('show');
    }

    function onToggleDropdown(e) {
        showDropdown(true);
    }

    function onChangeFilterText(e) {

    }

    function ontoggleItem(opt) {
        opt.selected = !opt.selected;
        setSelectedOptions();
        setSoptions([...soptions]);
    }

    //console.log('soptions', soptions);

    return (
        <div id="wrapper">
            <div className="input-group">
                <input className="form-control" type="text" readOnly value={selText} />
                <span className="input-group-addon dropdown-toggle" onClick={onToggleDropdown}>
                    <span className="caret"></span>
                </span>
            </div>
            <div className="dropdown-menu" ref={customSelectOptions}>
                <input className="form-control" type="text" placeholder="filter items" autoComplete="off" value={filterText} onChange={onChangeFilterText} />
                <ul>
                {                    
                    soptions && soptions.map((opt, idx) =>                                           
                        <li key={idx} data-value={opt.value} onClick={ontoggleItem.bind(ontoggleItem, opt)}>                            
                              {opt.selected && <i className="fa fa-check-square-o"></i>}                                                          
                              {!opt.selected &&  <i className="fa fa-square-o"></i>}                            
                            <span>{opt.text}</span>
                        </li>
                    )
                }
                </ul>
            </div>
        </div>
    );
}