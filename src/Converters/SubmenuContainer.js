
import {useState} from 'react';
import ReactForm from './ReactForm';
import Clock from './Clock';
import CreateContextDemo from './CreateContextDemo';
import MemoDemo from './MemoDemo';
import CustomHookDemo from './CustomHookDemo';
import CustomCompHolder from '../CustomComponent/CustomCompHolder';

export default function SubmenuContainer() {
    var selectedMenuItem = <ReactForm/>;
    const [selectedMenuId, setSelectedMenuId] = useState("mnuReactForm");

    const menuClick = function(evt) {
        //console.log("clicked on ", evt.currentTarget.id);
        setSelectedMenuId(evt.currentTarget.id);
    };

    const determineChildComponent = () => {           
        switch (selectedMenuId) {
            case "mnuReactForm":
                return <ReactForm/>
            case "mnuClock":
                return <Clock/>
            case "mnuCustomSelect":
                return <CustomCompHolder/>
            case "mnuCreateContext":
                return <CreateContextDemo />
            case "mnuMemoDemo":
                return <MemoDemo />
            case "mnuCustomHookDemo":
                return <CustomHookDemo />
            default:
                return <ReactForm/>
        }
    }

    //console.log('rendering component', selectedMenuId);
    return (
        <div className="wrapper">
            {/* Sidebar */}
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3 className="dropdown-toggle">React Components</h3>
                </div>

                <ul className="list-unstyled components">
                    <li className={selectedMenuId=='mnuReactForm'? 'nav-item active' : 'nav-item'}>
                        <a className="nav-link" href="#" id="mnuReactForm" onClick={menuClick}>
                            <i className="glyphicon glyphicon-book"></i>
                            <span>React Form</span>
                        </a>
                    </li>
                </ul>

                <ul className="list-unstyled components">
                    <li className={selectedMenuId=='mnuClock'? 'nav-item active' : 'nav-item'}>
                        <a className="nav-link" href="#" id="mnuClock" onClick={(evt) => menuClick(evt)}>
                            <i className="glyphicon glyphicon-book"></i>
                            <span>Clock</span>
                        </a>
                    </li>
                </ul>

                <ul className="list-unstyled components">
                    <li className={selectedMenuId=='mnuCustomSelect'? 'nav-item active' : 'nav-item'}>
                        <a className="nav-link" href="#" id="mnuCustomSelect" onClick={menuClick}>
                            <i className="glyphicon glyphicon-book"></i>
                            <span>Custom Select</span>
                        </a>
                    </li>
                </ul>

                <ul className="list-unstyled components">
                    <li className={selectedMenuId=='mnuCreateContext'? 'nav-item active' : 'nav-item'}>
                        <a className="nav-link" href="#" id="mnuCreateContext" onClick={menuClick}>
                            <i className="glyphicon glyphicon-book"></i>
                            <span>Create Context Demo</span>
                        </a>
                    </li>
                </ul>

                <ul className="list-unstyled components">
                    <li className={selectedMenuId=='mnuMemoDemo'? 'nav-item active' : 'nav-item'}>
                        <a className="nav-link" href="#" id="mnuMemoDemo" onClick={menuClick}>
                            <i className="glyphicon glyphicon-book"></i>
                            <span>Memo Demo</span>
                        </a>
                    </li>
                </ul>

                <ul className="list-unstyled components">
                    <li className={selectedMenuId=='mnuCustomHookDemo'? 'nav-item active' : 'nav-item'}>
                        <a className="nav-link" href="#" id="mnuCustomHookDemo" onClick={menuClick}>
                            <i className="glyphicon glyphicon-book"></i>
                            <span>Custom Hook</span>
                        </a>
                    </li>
                </ul>
            </nav>
            {/* Page Content */}
            <div id="content" className="contentDetails">
                    {determineChildComponent()}
            </div>
        </div>
    );
}