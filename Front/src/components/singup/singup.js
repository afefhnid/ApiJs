import React from "react";
import UserService from "../../services/user.service";
import TypeService from "../../services/type.service";

import { withRouter } from "react-router-dom";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
      type_id: "",
      success: false,
      messageSucces: ""
    };
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  async onSumbite(e) {
    e.preventDefault();
    if (this.state.confirmPassword !== this.state.password) {
      alert("Passwords don't match");
      return false;
    }
    let idType = "";
    let responseType = await TypeService.list();
    if (responseType.ok) {
      let data = await responseType.json();
      data.type.map((item, index) => {
        if (this.state.type_id === item.name) {
          idType = item._id;
        }
      });
    }
    this.setState({
      success: false
    });
    let body = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone,
      email: this.state.email,
      password: this.state.password,
      type_id: idType
    };
    let response = await UserService.create(body);
    if (response.ok) {
      this.setState({
        success: true,
        messageSucces: "authentication"
      });
      window.location.reload();
    }
  }
  render() {
    return (
      <form
        className="form"
        style={{ display: this.props.display }}
        onSubmit={e => this.onSumbite(e)}
        style={{ display: this.props.display }}
      >
        <div className="input-container">
          <label htmlFor="firstName" className="label">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First name"
            required="required"
            className="input"
            onChange={e => this.handleChange(e)}
          />
          <label htmlFor="lastName" className="label">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            required="required"
            placeholder="Last Name"
            className="input"
            onChange={e => this.handleChange(e)}
          />
          <label htmlFor="phone" className="label">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            required="required"
            placeholder=" Phone"
            className="input"
            onChange={e => this.handleChange(e)}
          />

          <label htmlFor="email" id="name" className="label">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required="required"
            placeholder="Email Address"
            className="input"
            onChange={e => this.handleChange(e)}
          />
          <label htmlFor="password" id="name" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            required="required"
            placeholder="Password"
            className="input"
            onChange={e => this.handleChange(e)}
          />
          <label htmlFor=" Confirm Password" id="name" className="label">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            required="required"
            placeholder="Password"
            className="input"
            onChange={e => this.handleChange(e)}
          />
          <label htmlFor="password" id="name" className="label">
            Type
          </label>
          <select
            id="lang"
            name="type_id"
            id="type_id"
            onChange={e => this.handleChange(e)}
            value={this.state.tech}
            className="input"
          >
            <option value="select">Select a Type</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" id="login-btn">
          SignUp
        </button>
      </form>
    );
  }
}

export default withRouter(SignUp);
