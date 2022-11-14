import {Link, useMatch, useResolvedPath} from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                Learn React in 30 Minutes
            </Link>
        </nav>
    );
}