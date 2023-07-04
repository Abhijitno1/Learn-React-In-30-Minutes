import React, {useState, useEffect, useRef, useMemo} from 'react';
import './CheckSelectStyles.css';

export default function CustomCheckSelect({options}) {
    const [soptions, setSoptions] = useState([]);
    const [selText, setSelText] = useState();
    const [filterText, setFilterText] = useState('');
    const [isShow, setIsShow] = useState(false);

    useEffect(()=>{
        setSelectedOptions();
 
    }, []);

    useEffect(() => {
        setSoptions([...options]);
    }, [options]);


    function setSelectedOptions() {
        let seltextcoll = '';
        setSelText(seltextcoll);

        soptions && soptions.forEach(opt => {
            //if ((selValues || '').split(',').indexOf(opt.value) > -1)
            //    opt.selected = true;
            if (opt.selected)
                seltextcoll += opt.text + ',';
        });
        setSelText(seltextcoll);
        //optionsCustomElement.scrollIntoView({ block: "nearest" });
    }

    const filteredOpts = useMemo(() => {
        return soptions && soptions.filter(opt => opt.text.toLowerCase().includes(filterText.toLowerCase()));
    }, [soptions, filterText]);

    function onToggleDropdown(e) {
        setIsShow(prevVal => !prevVal);
    }

    function onChangeFilterText(e) {
        setFilterText(e.target.value);
    }

    function ontoggleItem(opt) {
        opt.selected = !opt.selected;
        setSelectedOptions();
        setSoptions([...soptions]);
    }

    function getSelectedValues() {
        let seltextcoll = [];
        soptions && soptions.forEach(opt => {
            if (opt.selected === true)
                seltextcoll.push(opt.value);
        });
        seltextcoll= seltextcoll.join(',');
        return seltextcoll;
    }

    //console.log('soptions', soptions);

    return (
        <div id="wrapper">
            <div className="input-group" onClick={onToggleDropdown}>
                <input className="form-control" type="text" readOnly value={selText} />
                <span className="input-group-addon dropdown-toggle">
                    <span className="caret"></span>
                </span>
            </div>
            <div className={"dropdown-menu " + (isShow? 'show':'')}>
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