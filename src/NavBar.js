import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navBar">
            <ul className="navBarLinks">

                <Link to="/">
                    <li>Home</li>
                </Link>

                <Link to="/ujHaz">
                    <li>UjHaz</li>
                </Link>

                <Link to="/szures">
                    <li>Szures</li>
                </Link>
            </ul>
        </nav>
    );
}

export default NavBar;