import {Link, useMatch, useResolvedPath} from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                Learn React in 30 Minutes
            </Link>
            <ul>
                <CustomLink to="/translator">Translator</CustomLink>
                <CustomLink to="/curweather">Current Weather</CustomLink>
                <div class="ddropdown">
                    <button type="button" class="dropbtn">
                        Converters <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <li><CustomLink to="/converters">British to Metric</CustomLink></li>
                        <li><CustomLink to="/curconvert">Currency Converter</CustomLink></li>
                    </div>
                </div>
                <div class="ddropdown">
                    <button type="button" class="dropbtn">
                        Voice Utils <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <li><CustomLink to="/text2speech">Text Reader</CustomLink></li>
                        <li><CustomLink to="/speech2text">Steno Writer</CustomLink></li>
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
