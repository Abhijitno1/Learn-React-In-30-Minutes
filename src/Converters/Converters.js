import React, { useState } from 'react';
const wrapper = {
    display: 'flex',
    width: '100%',
    alignItems: 'stretch'
};
const sidebar = {
    width: '220px',
    heigth: '100vh',
    background: '#7386D5',
    color: '#fff'
};
const sidebarHeader = {
    padding: '5px 10px',
    background: '#6d7fcc'
};
export default function Converters() {
    const [fromValue, setFromValue] = useState();
    const [toValue, setToValue] = useState();

    function onChangeFromValue(e) {
        setFromValue(e.target.value);
    }

    function onChangeToValue(e) {
        setToValue(e.target.value);
    }

    return (
        <div style={wrapper}>
            <nav style={sidebar}>
                <div style={sidebarHeader}><h3>Converters</h3></div>
                <ul className="list-unstyled components">
                    <li className="nav-item aaa">
                        <a className="nav-link" href="Javascript: return false;" onClick={convertGallon2Litre}>
                            <i className="glyphicon glyphicon-book"></i>
                            <span>Gallon :: Litre</span>
                        </a>
                    </li>
                    <li className="nav-item aaa">
                        <a className="nav-link" href="Javascript: return false;" onClick={convertMiles2Km}>
                            <i className="glyphicon glyphicon-book"></i>
                            <span>Miles :: Km</span>
                        </a>
                    </li>
                    <li className="nav-item aaa">
                        <a className="nav-link" href="Javascript: return false;" onClick={convertFah2Cel}>
                            <i className="glyphicon glyphicon-book"></i>
                            <span>Farenhite :: Celcius</span>
                        </a>
                    </li>
                    <li className="nav-item aaa">
                        <a className="nav-link" href="Javascript: return false;" onClick={convertFtInch2Mtr}>
                            <i className="glyphicon glyphicon-book"></i>
                            <span>Foot and Inch :: Meters</span>
                        </a>
                    </li>
                    <li className="nav-item aaa">
                        <a className="nav-link" href="Javascript: return false;" onClick={convertPound2Kg}>
                            <i className="glyphicon glyphicon-book"></i>
                            <span>Pound :: Kilogram</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div id="content">
            <input type="number" className="currency" value={fromValue} onChange={onChangeFromValue}/>
            <span className="convertUnit">{fromUnit}</span>
            <div className="equals">=</div>
            <input type="number" className="currency" value={toValue} onChange={onChangeToValue}/>
            <span className="convertUnit">{toUnit}</span>
            </div>
        </div>
    );
}