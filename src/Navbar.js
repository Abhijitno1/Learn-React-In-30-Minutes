import {Link, useMatch, useResolvedPath} from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                Learn React in 30 Minutes
            </Link>
            <ul>
                <CustomLink to="/concepts">React Concepts</CustomLink>
                <CustomLink to="/translator">Translator</CustomLink>
                <CustomLink to="/curweather">Current Weather</CustomLink>
                <div className="ddropdown">
                    <button type="button" className="dropbtn">
                        Converters <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <CustomLink to="/converters">British to Metric</CustomLink>
                        <CustomLink to="/curconvert">Currency Converter</CustomLink>
                    </div>
                </div>
                <div className="ddropdown">
                    <button type="button" className="dropbtn">
                        Voice Utils <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <CustomLink to="/text2speech">Text Reader</CustomLink>
                        <CustomLink to="/speech2text">Steno Writer</CustomLink>
                    </div>
                </div>
                <CustomLink to="/about">About</CustomLink>
            </ul>
        </nav>
    );
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});

    return (
        <li className={isActive? "active": ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}
