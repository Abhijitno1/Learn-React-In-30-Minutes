import React, { useState, useEffect, useRef } from 'react';
const wrapper = {
    display: 'flex',
    width: '100%',
    alignItems: 'stretch'
};
const converterBar = {
    width: '230px',
    height: '80vh',
    background: '#7386D5',
    color: '#fff'
};
const sidebarHeader = {
    padding: '5px 10px',
    background: '#6d7fcc'
};
const navItem = {
    padding: '10px 15px',
    display: 'block',
    color: '#fff',
    cursor: 'pointer',
}
const contentStyle = {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
}
const convertValue = {
    border: '1px solid #333',
    borderRadius: '.3em',
    padding: '.25rem',
    width: '10em',
    marginRight: '1rem'
}
const eqStyle = {
    lineHeight: '1em',
    padding: '0 0.5em'
}
export default function Converters() {
    const txtFromValue = useRef();
    const [fromValue, setFromValue] = useState();
    const [toValue, setToValue] = useState();
    const [fromUnit, setFromUnit] = useState();
    const [toUnit, setToUnit] = useState();

    function onChangeFromValue(e) {
        setFromValue(e.target.value);
        var transform = (convFactor) => {
            let fromValue = parseFloat(e.target.value);
            let toValue = fromValue * convFactor;
            setToValue(toValue);
        }
        switch(fromUnit) {
            case 'Gallon':
                transform(3.7854);
                break;
            case 'Mile':
                transform(1.6093);
                break;
            case 'Farenhite':
                let fromValue = parseFloat(e.target.value);
                let toValue = (fromValue - 32) / 1.8 ;
                setToValue(toValue);
                break;
            case 'Foot':
                transform(0.3048)
                break;
            case 'Pound':
                transform(0.4536)
            }
    }

    function onChangeToValue(e) {
        setToValue(e.target.value);
        var transform = (convFactor) => {
            let toValue = parseFloat(e.target.value);
            let fromValue = toValue / convFactor;
            setFromValue(fromValue);
        }
        switch(fromUnit) {
            case 'Gallon':
                transform(3.7854);
                break;
            case 'Mile':
                transform(1.6093);
                break;
            case 'Farenhite':
                let toValue = parseFloat(e.target.value);
                let fromValue = (toValue * 1.8) + 32 ;  
                setFromValue(fromValue);
                break;
            case 'Foot':
                transform(0.3048)
                break;
            case 'Pound':
                transform(0.4536)
            }
    }
    
    function setCurConverter(ctype) {
        //console.log('setconverter is ', this);
        var transform = (convFactor) => {
            if (fromValue) {
                let nfromValue = parseFloat(fromValue);
                let toValue = nfromValue * convFactor;
                setToValue(toValue);
            }
            else if (toValue) {
                let ntoValue = parseFloat(toValue);
                let fromValue = ntoValue / convFactor;
                setFromValue(fromValue);
            }
        };

        switch (ctype) {
            case "Miles2Km":
                setFromUnit('Mile'); setToUnit('Km');
                transform(1.6093);
                break;
            case "Gallon2Litre":
                setFromUnit('Gallon'); setToUnit('Litre');
                transform(3.7854);
                break;
            case "Fah2Cel":
                setFromUnit('Farenhite'); setToUnit('Celcius');
                break;
            case "Ft2Mtr":
                setFromUnit('Foot'); setToUnit('Mtr');
                transform(0.3048)
                break;
            case "Pound2Kg":
                setFromUnit('Pound'); setToUnit('Kg');
                transform(0.4536);
                break;
            default:
                //do nothing
        }
    }

    useEffect(()=> {
        setCurConverter('Gallon2Litre');
        txtFromValue.current.focus();
    }, []);

    return (
        <div style={wrapper}>
            <nav id="converter-bar" style={converterBar}>
                <div style={sidebarHeader}><h3>Converters</h3></div>
                <ul className="list-unstyled components">
                    <li style={navItem} className={`nav-item ${fromUnit === 'Gallon' ? 'active' : ''}`}
                         onClick={setCurConverter.bind(setCurConverter, 'Gallon2Litre')}>
                        <a className="nav-link" href="#">
                            <i className="fa fa-hand-spock-o"></i>&nbsp;
                            <span>Gallon :: Litre</span>
                        </a>
                    </li>
                    <li style={navItem} className={`nav-item ${fromUnit === 'Mile' ? 'active' : ''}`}
                         onClick={setCurConverter.bind(setCurConverter, 'Miles2Km')}>
                        <a className="nav-link" href="#">
                            {/* https://www.w3schools.com/icons/fontawesome5_icons_marketing.asp */}
                            <i className="fa fa-hand-peace-o"></i>&nbsp;
                            <span>Miles :: Km</span>
                        </a>
                    </li>
                    <li style={navItem} className={`nav-item ${fromUnit === 'Farenhite' ? 'active' : ''}`}
                        href="#" onClick={setCurConverter.bind(setCurConverter, 'Fah2Cel')} >
                        <a className="nav-link" href="#" >
                            <i className="fa fa-thumbs-o-up"></i>&nbsp;
                            <span>Farenhite :: Celcius</span>
                        </a>
                    </li>
                    <li style={navItem} className={`nav-item ${fromUnit === 'Foot' ? 'active' : ''}`}
                        onClick={setCurConverter.bind(setCurConverter, 'Ft2Mtr')}>
                        <a className="nav-link" href="#">
                            <i className="fa fa-hand-o-up"></i>&nbsp;
                            <span>Foot :: Meter</span>
                        </a>
                    </li>
                    <li style={navItem} className={`nav-item ${fromUnit === 'Pound' ? 'active' : ''}`}
                        onClick={setCurConverter.bind(setCurConverter, 'Pound2Kg')}>
                        <a className="nav-link" href="#" >
                            <i className="fa fa-hand-paper-o"></i>&nbsp;
                            <span>Pound :: Kilogram</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div id="content" style={contentStyle}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                    <input type="number" style={convertValue} value={fromValue} onChange={onChangeFromValue} ref={txtFromValue}/>
                    <span className="convertUnit">{fromUnit}</span>
                    <div className="equals" style={eqStyle}>=</div>
                    <input type="number" style={convertValue} value={toValue} onChange={onChangeToValue}/>
                    <span className="convertUnit">{toUnit}</span>
                </div>
            </div>
        </div>
    );
}