import React, { Component } from "react";
import Navbar from "./../Navbar";
import "./styles.scss";
class NavHero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trie: ""
    };
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.name);
  }
  render(h) {
    console.log(JSON.parse(localStorage.getItem("user")));
    return (
      <section className="NavHero hero">
        <div className="hero-head">
          <Navbar dark={true} />

          {JSON.parse(localStorage.getItem("user")) &&
          JSON.parse(localStorage.getItem("user")).type_id.name === "user" ? (
            <div className="hero-body">
              <div className="container has-text-centered">
                <header className="section-header">
                  <h1 className="title is-spaced is-1 is-size-3-mobile has-text-weight-bold">
                    LE BON COIN DES VOLS
                  </h1>
                  <p className="NavHero__subtitle subtitle">
                    De Tous Les Livres Du Monde, Les Meilleurs Histoires Sont
                    Retrouvées Entre Les Pages De Votre Passport.
                  </p>
                </header>

                <div style={{ display: "flex", justifyContent: "center" }}>
                  <input
                    type="text"
                    placeholder="Recherche"
                    name="trie"
                    id="trie"
                    onChange={e => this.handleChange(e)}
                  />

                  <button
                    className="button is-primary is-medium"
                    onClick={() => this.props.trie(this.state.trie)}
                  >
                    Trier
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>
    );
  }
}

export default NavHero;
