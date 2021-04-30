import React from "react"

function About () {

    return (
        <div id="about" className="container py-5">
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
                        After getting my Bachelors in Business Administration, I worked in sales and client management for seven years before discovering my knack for coding.
                    </p>
                    <p className="about mb-3">
                    I enjoy creating things that live on the internet and code with design in mind. I get energized by a challenge and am always learning new languages and frameworks. One day, I hope to connect people across the world through accessible and inclusive technology.
                    </p>
                    <p className="about mb-3">
                        I’m a street food connoisseur, I collect vinyls when I travel, I have a ridiculous amount of plants, and I’m a proud dog dad of a rescue from Thailand. 
                    </p>
                    <p className="about mb-1">
                        Technologies I've been working with recently:
                    </p>
                    <table className="table mb-0">
                        <tbody>
                            <tr>
                                <td><span className="skill-arrow">ᐅ</span> JavaScript (ES6+)</td>
                                <td><span className="skill-arrow">ᐅ</span> React</td>
                            </tr>
                            <tr>
                                <td><span className="skill-arrow">ᐅ</span> Redux</td>
                                <td><span className="skill-arrow">ᐅ</span> Ruby on Rails</td>
                            </tr>
                            <tr>
                                <td><span className="skill-arrow">ᐅ</span> HTML</td>
                                <td><span className="skill-arrow">ᐅ</span> CSS</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default About
