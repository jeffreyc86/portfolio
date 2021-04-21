import React from "react"

function About () {

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">

                        <img className="profile-img" src={process.env.PUBLIC_URL + "/assets/headshot.jpg"} alt="profile pic" />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="abt-heading">About Me</h1>
                    <p className="about mb-3">
                        Hello! I'm Jeffrey. Most people call me Jeff. I'm a native New Yorker still based in the city.
                    </p>
                    <p className="about mb-3">
                        After getting my Bachelors in Business Administration, I worked in sales and client management for seven years before finding my passion for coding and enrolling at Flatiron School.
                    </p>
                    <p className="about mb-3">
                        I code with design in mind and am experienced in JavaScript-based programming, especially React and Redux, as well as Ruby on Rails. I get energized by a challenge and am always learning new skills to grow my tech stack. I love building new projects and one day hope to connect people across the world through technology.
                    </p>
                    <p className="about mb-0">
                        I’m a street food connoisseur, I collect vinyls when I travel, I have a ridiculous amount of plants, and I’m a proud dog dad of a rescue from Thailand. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
