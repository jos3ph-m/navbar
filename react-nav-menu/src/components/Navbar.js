import { useState } from 'react';

// rrd
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

// styles
import "./Navbar.css"

// icons
import {GiRocketThruster} from "react-icons/gi"
import {FaBars, FaTimes} from "react-icons/fa"
import {IconContext} from "react-icons/lib"

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <div className="navbar-container container">
                    <Link to="/" className="navbar-logo" >
                        <GiRocketThruster className='navbar-icon' />
                        Sky
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar;