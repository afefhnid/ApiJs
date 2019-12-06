import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCog } from "@fortawesome/free-solid-svg-icons";
import FormUpade from "../../components/FormUpdate/formUpade";
class UserUsername extends Component {
  constructor(props, params) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  openModif() {
    if (this.state.isOpen === false) {
      this.setState({ isOpen: true });
    } else {
      this.setState({ isOpen: false });
    }
  }
  render(h) {
    const user = JSON.parse(localStorage.getItem("user"));

    return (
      <>
        <Navbar />
        <div className="NoComponentName__replace-this  has-text-centered">
          <div className="container">
            {user && (
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                  {" "}
                  <h1 className="title is-spaced">User Profile</h1>
                  <img
                    src="http://www.herbeumont.be/macommune/vie-politique/conseil-communal/img/no-profile-image-png.png/image_preview"
                    style={{ maxWidth: "117px" }}
                  />
                  <h2 className="subtitle">First Name: {user.firstName}</h2>
                  <h2 className="subtitle">Last Name: {user.lastName}</h2>
                  <h2 className="subtitle">Phone: {user.phone}</h2>
                  <h2 className="subtitle">Email: {user.email}</h2>
                </div>

                {this.state.isOpen ? (
                  <div>
                    <h1 className="title is-spaced">Modifier</h1>
                    <FormUpade user={user} />{" "}
                  </div>
                ) : null}

                <FontAwesomeIcon
                  style={{
                    width: "100px",
                    height: "66px",
                    padding: "0 12px 0px 37px"
                  }}
                  icon={faUserCog}
                  onClick={() => this.openModif()}
                />
              </div>
            )}
            {/** {!user && (
              <>No user with the username "{params.username}" was found :(</>
            )}
             */}
          </div>
        </div>
      </>
    );
  }
}

export default UserUsername;
