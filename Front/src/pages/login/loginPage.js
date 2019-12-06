import React, { Component } from "react";
import Login from "../../components/login/login";
import SignUp from "../../components/singup/singup";
import "./login.css";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayLogin: "block",
      displaySignUp: "none"
    };
  }
  //diplay compoenet login signin
  login() {
    this.setState({
      displayLogin: "block",
      displaySignUp: "none"
    });
  }
  signUp() {
    this.setState({
      displayLogin: "none",
      displaySignUp: "block"
    });
  }
  render() {
    return (
      <div className="login">
        <div style={{ display: "flex" }}>
          <button
            className="buttonLogin"
            style={{ width: "126px" }}
            onClick={() => {
              this.login();
            }}
          >
            Login
          </button>
          <button
            className="buttonLogin"
            style={{ width: "126px" }}
            onClick={() => {
              this.signUp();
            }}
          >
            SignUp
          </button>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Login display={this.state.displayLogin} />
          <SignUp display={this.state.displaySignUp} />
        </div>
      </div>
    );
  }
}

export default LoginPage;
