import React from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' 
import { faGithub, faLinkedin, faMedium } from "@fortawesome/free-brands-svg-icons"

function About () {

    return (
      <div id="about" className="container py-5">
        <div className="row">
          <div className="col-lg-6 col-xm-12">
            <div className="photo-wrap mb-2">
              <img
                className="profile-img"
                src={process.env.PUBLIC_URL + "/assets/headshot.jpg"}
                alt="profile pic"
              />
            </div>
            <div className="footer-links text-center mb-4">
              <a
                className="footer-icon abt-icon"
                href="https://www.linkedin.com/in/jchiu86"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                className="footer-icon abt-icon"
                href="https://github.com/jeffreyc86"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                className="footer-icon abt-icon"
                href="https://jeffrey-chiu.medium.com"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faMedium} />
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-xm-12">
            <h1 className="abt-heading">
              About Me<span className="overlap">About Me</span>
            </h1>
            <p className="about mb-3">
              Hello! I'm Jeffrey. Most people call me Jeff. I'm a native New
              Yorker still based in the city.
            </p>
            <p className="about mb-3">
              After getting my Bachelors in Business Administration, I worked in
              sales and client management for seven years before discovering my
              knack for coding.
            </p>
            <p className="about mb-3">
              I enjoy creating things that live on the internet and code with
              design in mind. I get energized by a challenge and am always
              learning new languages and frameworks. One day, I hope to connect
              people across the world through accessible and inclusive
              technology.
            </p>
            <p className="about mb-3">
              I’m a street food connoisseur, I collect vinyls when I travel, I
              have a ridiculous amount of plants, and I’m a proud dog dad of a
              rescue from Thailand.
            </p>
            <p className="about mb-1">
              Technologies I've been working with recently:
            </p>
            <table className="table mb-0">
              <tbody>
                <tr>
                  <td>
                    <span className="skill-arrow">ᐅ</span> TypeScript
                  </td>
                  <td>
                    <span className="skill-arrow">ᐅ</span> JavaScript (ES6+)
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="skill-arrow">ᐅ</span> React
                  </td>
                  <td>
                    <span className="skill-arrow">ᐅ</span> Redux
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="skill-arrow">ᐅ</span> Node.js
                  </td>
                  <td>
                    <span className="skill-arrow">ᐅ</span> Ruby on Rails
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="skill-arrow">ᐅ</span> HTML
                  </td>
                  <td>
                    <span className="skill-arrow">ᐅ</span> CSS
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
}

export default About
