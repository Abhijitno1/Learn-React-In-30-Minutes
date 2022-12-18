import React, {useState, useEffect, useRef, useMemo} from 'react';
import './CheckSelectStyles.css';

export default function CustomCheckSelect({selValues, options}) {
    const [soptions, setSoptions] = useState([]);
    const [selText, setSelText] = useState();
    const [filterText, setFilterText] = useState('');
    const [isShow, setIsShow] = useState(false);
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
            else if (seltextcoll.indexOf(opt.text) > -1)
                opt.selected = true;
        });
        setSelText(seltextcoll);
        //optionsCustomElement.scrollIntoView({ block: "nearest" });
    }

    const filteredOpts = useMemo(() => {
        return soptions && soptions.filter(opt => opt.text.toLowerCase().includes(filterText.toLowerCase()));
    }, [soptions, filterText]);

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

    function onChangeFilterText(e) {
        setFilterText(e.target.value);
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
                    filteredOpts && filteredOpts.map((opt, idx) =>                                           
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