import React from 'react'

function Experience() {

    return (
        <div className="experience">
            <div className="d-flex justify-content-center my-4">
                <h1>Experience</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h5>Software Engineering Student</h5>
                        <h6 className="employer">Flatiron School</h6>
                        <h6>November 2020 - March 2021</h6>
                        <p>Engaged in a 15-Week Immersive Software Engineering Program encompassing a variety of languages, frameworks, and libraries, such as JavaScript, React, Redux, Ruby, Rails, SQL, PostgreSQL, Git, HTML, and CSS. The intensive, full-time training includes classes/lectures, code challenges, presentations, as well as individual, pair, and group programming projects.</p>
                    </div>
                </div>
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h5>Analyst, Business Development</h5>
                        <h6 className="employer">Factor</h6>
                        <h6>April 2019-September 2020</h6>
                        <p>Drove growth via outbound outreach. Called on C-Suite executives, General Counsels, and potential clients, to identify potential engagements for Factor’s next-generation legal solutions focused around process, workflow software, and contract management technology.</p>
                    </div>
                </div>
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h5>Account Executive</h5>
                        <h6 className="employer">Liaigre, Inc</h6>
                        <h6>April 2018-April 2019</h6>
                        <p>Cultivated relationships with interior design firms within eastern Canada, New York, and Washington DC. Developed customized account plans and achieved $1 million in sales within the first six months.</p>
                    </div>
                </div>
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h5>Assistant Showroom Manager – Account Executive</h5>
                        <h6 className="employer">Cassina</h6>
                        <h6>September 2014-April 2018</h6>
                        <p>Managed high profile interior designers and clients with an 80% conversion rate. Ranked #1 nationally and #3 worldwide for sales in 2016, 2017, and first half of 2018, while overseeing a team of three Account Executives.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
