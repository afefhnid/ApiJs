import React from "react";
import UserService from "../../services/user.service";
import { withRouter } from "react-router-dom";
import "./form.css";
class FormUpade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.user.firstName,
      lastName: this.props.user.lastName,
      phone: this.props.user.phone
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.value);
  }

  async onSumbite(e) {
    e.preventDefault();
    this.setState({
      success: false
    });
    let id = this.props.user._id;

    let body = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone,
      password: this.props.user.password,
      email: this.props.user.email,
      type_id: this.props.user.type_id
    };
    console.log(body);
    let response = await UserService.update(id, body);
    if (response.ok) {
      let data = await response.json();
      console.log(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
      window.location.reload();
      this.setState({
        success: true,
        messageSucces: "update"
      });
    } else {
      console.log("erreur");
    }
  }
  render(h) {
    console.log(this.props.user._id);
    // this.props.display
    return (
      <div>
        <form
          onSubmit={e => this.onSumbite(e)}
          style={{ display: this.props.display }}
        >
          <ul class="form-style-1">
            <li>
              <label>
                Full Name <span class="required">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                defaultValue={this.props.user.firstName}
                class="field-divided"
                placeholder="First"
                onChange={e => this.handleChange(e)}
              />{" "}
              <input
                type="text"
                name="lastName"
                defaultValue={this.props.user.lastName}
                class="field-divided"
                placeholder="Last"
                onChange={e => this.handleChange(e)}
              />
            </li>
            <li>
              <label>
                Email <span class="required">*</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={this.props.user.email}
                class="field-long"
                onChange={e => this.handleChange(e)}
              />
            </li>
            <li>
              <label>
                Phone <span class="required">*</span>
              </label>
              <input
                type="text"
                name="phone"
                defaultValue={this.props.user.phone}
                class="field-long"
                onChange={e => this.handleChange(e)}
              />
            </li>
            <li>
              <button type="submit">
                <input type="submit" value="Submit" />
              </button>
            </li>
          </ul>
        </form>
      </div>
    );
  }
}
export default withRouter(FormUpade);
