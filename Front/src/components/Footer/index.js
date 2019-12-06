import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

function Footer(props) {
  return (
    <footer className="FooterComponent section is-medium">
      <div className="container">
        <div className="columns">
          <div className="column is-5 is-4-widescreen">
            <div className="summary">
              <Link className="brand" to="/">
                <div className="brand-icon"></div>
              </Link>
              <p className="FooterComponent__no-classname">
                A short description of what you do here
              </p>
              <p className="FooterComponent__no-classname">© Bulma</p>
            </div>
          </div>
          <div className="column is-7 is-6-widescreen is-offset-2-widescreen">
            <div className="columns">
              <div className="column is-4">
                <div className="menu">
                  <p className="menu-label">Product</p>
                  <ul className="menu-list">
                    <li>
                      <Link to="/product">Learn More</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column is-4">
                <div className="menu">
                  <p className="menu-label">Company</p>
                  <ul className="menu-list">
                    <li>
                      <Link to="/team">Team</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/support">Support</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column is-4">
                <div className="menu">
                  <p className="menu-label">Social</p>
                  <ul className="menu-list">
                    <li>
                      <a href="https://facebook.com" target="_blank">
                        <img src="/static/images/icons/facebook.svg" />
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com" target="_blank">
                        <img src="/static/images/icons/instagram.svg" />
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com" target="_blank">
                        <img src="/static/images/icons/twitter.svg" />
                        Twitter
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
