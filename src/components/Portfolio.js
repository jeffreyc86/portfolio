import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faSearchPlus, faPlayCircle, faGlobe} from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { PopupboxManager, PopupboxContainer } from 'react-popupbox'
import "react-popupbox/dist/react-popupbox.css"


function Portfolio() {

    // Alteri Popup
    const openPopupAlteri = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={process.env.PUBLIC_URL + "/assets/alteri.png"} alt="Alteri" />
                <p className="popup-desc">A web app connecting those in need of basic necessities with donors in their area. Compassion included.</p>
                <div className="popup-icons">
                    <a className="hyper-link" onClick={() => window.open("https://alteri-client.netlify.app/")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faGlobe} style={{color: "black"}}/>
                            Live Link
                        </div>
                    </a>
                    <a className="hyper-link" onClick={() => window.open("https://www.loom.com/share/471914886e254936afc0976c14b0b3c2")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faPlayCircle} style={{color: "black"}}/>
                            Watch Demo
                        </div>
                    </a>
                    <a className="hyper-link" onClick={() => window.open("https://github.com/jeffreyc86/alteri")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faGithub} style={{color: "black"}}/>
                            GitHub
                        </div>
                    </a>
                </div>
            </>
        )
        PopupboxManager.open({
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: "Alteri"
                },
                fadeIn: true,
                fadeInSpeed: 500
            }
        })
    }

    // Spreddit Popup
    const openPopupSpreddit = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={process.env.PUBLIC_URL + "/assets/spreddit.png"} alt="Spreddit" />
                <p className="popup-desc">A functional Reddit clone to post about pandemic related topics.</p>
                <div className="popup-icons">
                    <a className="hyper-link" onClick={() => window.open("https://spreddit.netlify.app/")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faGlobe} style={{color: "black"}}/>
                            Live Link
                        </div>
                    </a>
                    <a className="hyper-link" onClick={() => window.open("https://www.loom.com/share/ee4777543eb6430098f9f0990072d761")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faPlayCircle} style={{color: "black"}}/>
                            Watch Demo
                        </div>
                    </a>
                    <a className="hyper-link" onClick={() => window.open("https://github.com/jeffreyc86/spreddit")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faGithub} style={{color: "black"}}/>
                            GitHub
                        </div>
                    </a>
                </div>
            </>
        )
        PopupboxManager.open({
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: "Spreddit"
                },
                fadeIn: true,
                fadeInSpeed: 500
            }
        })
    }


    // YouTravel Popup
    const openPopupYouTravel = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={process.env.PUBLIC_URL + "/assets/youtravel.png"} alt="YouTravel" />
                <p className="popup-desc">A video platform for travelers to share and discover videos from cities across the world.</p>
                <div className="popup-icons">
                    <a className="hyper-link" onClick={() => window.open("https://youtravel.netlify.app/")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faGlobe} style={{color: "black"}}/>
                            Live Link
                        </div>
                    </a>
                    <a className="hyper-link" onClick={() => window.open("https://www.loom.com/share/7fd0bb35571a4eb8bfdef9d2c4ea1c3e")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faPlayCircle} style={{color: "black"}}/>
                            Watch Demo
                        </div>
                    </a>
                    <a className="hyper-link" onClick={() => window.open("https://github.com/jeffreyc86/youtravel")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faGithub} style={{color: "black"}}/>
                            GitHub
                        </div>
                    </a>
                </div>
            </>
        )
        PopupboxManager.open({
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: "YouTravel"
                },
                fadeIn: true,
                fadeInSpeed: 500
            }
        })
    }


    // Fridge Meals Popup
    const openPopupFridgeMeals = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={process.env.PUBLIC_URL + "/assets/fridge-meals.jpg"} alt="Fridge Meals" />
                <p className="popup-desc">An app allowing users to discover recipes based on the ingredients they have available at home.</p>
                <div className="popup-icons">
                    <a className="hyper-link" onClick={() => window.open("https://www.loom.com/share/3f686e9cacc942d5926fe29d9e084c66")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faPlayCircle} style={{color: "black"}}/>
                            Watch Demo
                        </div>
                    </a>
                    <a className="hyper-link" onClick={() => window.open("https://github.com/jeffreyc86/fridge-meals")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faGithub} style={{color: "black"}}/>
                            GitHub
                        </div>
                    </a>
                </div>
            </>
        )
        PopupboxManager.open({
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: "Fridge Meals"
                },
                fadeIn: true,
                fadeInSpeed: 500
            }
        })
    }

    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupAlteri}>
                        <img className="portfolio-image" src={process.env.PUBLIC_URL + "/assets/alteri.png"} alt="Alteri" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    <div className="portfolio-image-box" onClick={openPopupSpreddit}>
                        <img className="portfolio-image" src={process.env.PUBLIC_URL + "/assets/spreddit.png"} alt="Spreddit" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />

                    </div>
                    <div className="portfolio-image-box" onClick={openPopupYouTravel}>
                        <img className="portfolio-image" src={process.env.PUBLIC_URL + "/assets/youtravel.png"} alt="YouTravel" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    <div className="portfolio-image-box" onClick={openPopupFridgeMeals}>
                        <img className="portfolio-image" src={process.env.PUBLIC_URL + "/assets/fridge-meals.jpg"} alt="Fridge Meals" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer />
        </div>
    )
}

export default Portfolio
