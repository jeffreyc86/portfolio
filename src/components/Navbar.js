import React from "react"
import {NavLink} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' 
import {faBars} from "@fortawesome/free-solid-svg-icons"


function Navbar () {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <span></span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color: "black"}}/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <NavLink 
                                to="/"
                                exact
                                className="nav-link"
                            >
                                Home
                                <span className="sr-only">(current)</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                to="/about"
                                exact
                                className="nav-link"
                            >
                                About Me
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                to="/portfolio"
                                exact
                                className="nav-link"
                            >
                                Portfolio
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                to="/experience"
                                exact
                                className="nav-link"
                            >
                                Experience
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                to="/resume"
                                exact
                                className="nav-link"
                            >
                                Resume
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                to="/contact"
                                exact
                                className="nav-link"
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
        </nav>
    )
}

export default Navbar
