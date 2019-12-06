import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import "./styles.scss";
import UserService from "../../services/user.service";
class UserDetails extends Component {
  constructor(props, params) {
    super(props);
    this.state = {
      details: []
    };
  }
  async componentDidMount() {
    let id = this.props.match.params.id;
    console.log(id);
    let response = await UserService.details(id);

    if (response.ok) {
      let data = await response.json();
      console.log(data);
      this.setState({
        details: data.user
      });
    }
  }
  render(h) {
    return (
      <>
        <Navbar />
        <div className="NoComponentName__replace-this  has-text-centered">
          <div className="container">
            {this.state.details && (
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                  {" "}
                  <h1 className="title is-spaced">User Profile</h1>
                  <img
                    src="http://www.herbeumont.be/macommune/vie-politique/conseil-communal/img/no-profile-image-png.png/image_preview"
                    style={{ maxWidth: "117px" }}
                  />
                  <h2 className="subtitle">
                    First Name: {this.state.details.firstName}
                  </h2>
                  <h2 className="subtitle">
                    Last Name: {this.state.details.lastName}
                  </h2>
                  <h2 className="subtitle">
                    Phone: {this.state.details.phone}
                  </h2>
                  <h2 className="subtitle">
                    Email: {this.state.details.email}
                  </h2>
                </div>

                {this.state.isOpen ? (
                  <div>
                    <h1 className="title is-spaced">Modifier</h1>
                  </div>
                ) : null}
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

export default UserDetails;
