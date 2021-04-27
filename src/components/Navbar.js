import React from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' 
import {faBars} from "@fortawesome/free-solid-svg-icons"
import {Link} from "react-scroll"


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
                            <Link smooth={true} to="home" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="about" offset={-50} className="nav-link" href="#">about me</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="portfolio" offset={-50} className="nav-link" href="#">portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="experience" offset={-50} className="nav-link" href="#">experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="resume" offset={-50} className="nav-link" href="#">resume</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="contact" offset={-50} className="nav-link" href="#">Contact</Link>
                        </li>
                    </ul>
                </div>
        </nav>
    )
}

export default Navbar
