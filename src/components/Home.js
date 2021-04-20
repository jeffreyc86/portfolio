import React from "react"
import Typed from "react-typed"

function Home () {


    return (
        <div className="home-wrapper">
            <div className="main-info">
                <div className="glitch-container">

                    <h1>JEFFREY CHIU</h1>
                    <h1>JEFFREY CHIU</h1>
                    <h1>JEFFREY CHIU</h1>
                </div>
            <Typed
                className="typed-text"
                strings={["Full-Stack Software Engineer", "React"]}
                typeSpeed={40}
                backSpeed={60}
                loop
            />
            
            </div>
        </div>
    )
}

export default Home