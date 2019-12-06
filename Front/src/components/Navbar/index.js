import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import useFakeAuth from "./../../util/use-fake-auth.js";
import "./styles.scss";
const signin = () => {};

function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [auth, signin, signout] = useFakeAuth();

  const logoImg = props.dark
    ? "https://www.sim-airways.com/images/media/logo/logo.png"
    : "https://www.sim-airways.com/images/media/logo/logo.png";

  return (
    <nav
      className={
        "NavbarComponent navbar is-spaced" + (props.dark ? " is-dark" : "")
      }
    >
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link to="/">
              <img
                className="image"
                src={logoImg}
                width={"87px"}
                style={{ maxHeight: "136px", maxwidth: "87px " }}
              />
            </Link>
          </div>
          <div
            className={"navbar-burger burger" + (menuOpen ? " is-active" : "")}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={"navbar-menu" + (menuOpen ? " is-active" : "")}>
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <Link className="navbar-link" to="/Home">
                Account
              </Link>
              <div className="navbar-dropdown is-boxed">
                <Link
                  className="navbar-item"
                  to={`/user/${JSON.parse(localStorage.getItem("user"))
                    .firstName ||
                    JSON.parse(localStorage.getItem("user")).name}`}
                >
                  Profile
                </Link>

                <Link className="navbar-item" to="/UserTickets">
                  Mes Tickets
                </Link>
              </div>
            </div>

            <Link
              className="navbar-item"
              to="/"
              onClick={() => localStorage.removeItem("user")}
            >
              Sign ou
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

/**
 *     componentWillMount() {
        if (this.props.trie) {
          this.props.trie(this.getTrie("test"));
        }
      }

      getTrie(weatherData) {
        //Check for condition and return value
        return "example-color1"
      }
 */
