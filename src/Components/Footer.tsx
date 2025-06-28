import React from "react";
import "../Styles/Footer.css";
import SubscribeNewsletter from "./SubscribeNewsletter";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Column 1: About */}
          <div className="footer-about">
            <p className="footer-brand">
  <span className="footer-health">Health</span><span className="footer-plus">Connect</span>
</p>
            <p className="footer-description">
              Talk to online doctors and get medical advice, prescriptions, refills, and notes within minutes.
              On-demand healthcare services at your fingertips.
            </p>
            <SubscribeNewsletter />
          </div>

          {/* Column 2: Services */}
          <div className="footer-column">
            <p className="footer-column-title">Services</p>
            <ul className="footer-links">
              <li><a href="#services">Emergency Care</a></li>
              <li><a href="#services">Heart Disease</a></li>
              <li><a href="#services">Dental Care</a></li>
              <li><a href="#services">Prescription</a></li>
              <li><a href="#services">Insights for doctors</a></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="footer-column">
            <p className="footer-column-title">Legal</p>
            <ul className="footer-links">
              <li><Link to="/legal">General Info</Link></li>
              <li><Link to="/legal">Privacy Policy</Link></li>
              <li><Link to="/legal">Terms of Services</Link></li>
              <li><Link to="/legal">Consultations</Link></li>
              <li><Link to="/legal">How it Works</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="footer-column" id="contact">
            <p className="footer-column-title">Talk To Us</p>
            <ul className="footer-links">
              <li><a href="mailto:support@healthconnect.com">support@healthconnect.com</a></li>
              <li><a href="mailto:appointment@healthconnect.com">appointment@healthconnect.com</a></li>
              <li><a href="tel:+02254545252">+022 5454 5252</a></li>
              <li><a href="tel:+02223266232">+022 2326 6232</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>© 2013-2023 Health+. All rights reserved.</p>
          <ul className="footer-socials">
            <li>
              <a href="https://linkedin.com/in/Alkaison/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" title="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://x.com/Alkaison/" target="_blank" rel="noopener noreferrer" title="Twitter">
                <i className="fab fa-x-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
