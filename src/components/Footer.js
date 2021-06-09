import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col footer-col">
            <div className="d-flex footer-flex">
              <a className="footer-contact" href="tel:347-589-4735">
                <FontAwesomeIcon
                  className="footer-contact-icon"
                  icon={faMobileAlt}
                />
                +1.347.589.4735
              </a>
            </div>
            <div className="d-flex footer-flex">
              <a
                className="footer-contact"
                href="mailto:mr.jeffrey.chiu@gmail.com"
              >
                <FontAwesomeIcon
                  className="footer-contact-icon"
                  icon={faEnvelope}
                />
                mr.jeffrey.chiu@gmail.com
              </a>
            </div>
          </div>
          <div className="col footer-col my-auto">
            <div className="d-flex footer-links">
              <a
                className="footer-icon"
                href="https://www.linkedin.com/in/jchiu86"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                className="footer-icon"
                href="https://github.com/jeffreyc86"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                className="footer-icon"
                href="https://jeffrey-chiu.medium.com"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faMedium} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p className="text-center">
          COPYRIGHT &copy; {new Date().getFullYear()} JEFFREY CHIU | ALL RIGHTS
          RESERVED
        </p>
      </div>
    </div>
  );
}

export default Footer;
