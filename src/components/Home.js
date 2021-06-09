import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

function Home() {
  return (
    <div id="home" className="home-wrapper">
      <div className="main-info">
        <div className="glitch-container">
          <h1>JEFFREY CHIU</h1>
          <h1>JEFFREY CHIU</h1>
          <h1>JEFFREY CHIU</h1>
        </div>
        <Typed
          className="typed-text"
          strings={[
            "Full-Stack Software Engineer",
            "Based in NYC",
            "JavaScript",
            "React",
            "Redux",
            "Ruby on Rails",
            "HTML",
            "CSS",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link
          to="contact"
          smooth={true}
          offset={-50}
          className="btn-main-offer"
        >
          Contact Me
        </Link>
      </div>
      <section id="scroll" className="demo">
        <a href="#thanks">
          <span></span>
        </a>
      </section>
    </div>
  );
}

export default Home;
