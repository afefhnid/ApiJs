import React from "react";
import UserService from "../../services/user.service";
import { withRouter } from "react-router-dom";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      erreur: false,
      messageErreur: "Email ou mot de passe incorrectes !"
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  async componentDidMount() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      if (user._id) {
        if (user.type_id.name === "user") {
          this.props.history.push("/Home");
        } else if (user.type_id.name === "admin") {
          this.props.history.push("/Admin");
        } else {
          this.props.history.push("/");
        }
      }
    }
  }
  async onSumbite(e) {
    e.preventDefault();
    this.setState({
      success: false
    });

    let body = {
      email: this.state.email,
      password: this.state.password
    };
    let response = await UserService.authentication(body);
    if (response.ok) {
      this.setState({
        success: false
      });
      let data = await response.json();
      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));

        if (data.user.type_id.name === "user") {
          this.props.history.push("/Home");
        } else if (data.user.type_id.name === "admin") {
          this.props.history.push("/Admin");
        } else {
          this.props.history.push("/");
        }
      }
    } else {
      this.setState({
        success: true,
        messageSucces: "authentication"
      });
    }
  }
  render() {
    return (
      <form
        className="form"
        onSubmit={e => this.onSumbite(e)}
        style={{ display: this.props.display }}
      >
        <div className="input-container">
          <label className="label">Username: </label>
          <input
            type="text"
            name="email"
            className="input"
            placeholder="email"
            id="email"
            onChange={e => this.handleChange(e)}
          />
        </div>
        <div className="input-container">
          <label className="label">Password: </label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
            id="password"
            onChange={e => this.handleChange(e)}
          />
          <a href="#" className="link forgotten-password">
            Forgot password?
          </a>
        </div>
        <button type="submit" id="login-btn">
          Login
        </button>
        {!this.state.erreur ? <p>{this.state.messageErreur}</p> : null}
      </form>
    );
  }
}

export default withRouter(Login);
