import {Link, useMatch, useResolvedPath} from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                Learn React in 30 Minutes
            </Link>
            <ul>
                <CustomLink to="/converters">Converters</CustomLink>
                <CustomLink to="/curweather">Current Weather</CustomLink>
                <CustomLink to="/curconvert">Currency Converter</CustomLink>
                <CustomLink to="/text2speech">Text Reader</CustomLink>
                <CustomLink to="/speech2text">Steno Writer</CustomLink>
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
