import React from "react";
import UserService from "../../services/user.service";
import { withRouter } from "react-router-dom";

class UpdateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      details: []
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log("eee");
  }

  async onSumbite(e) {
    e.preventDefault();
    this.setState({
      success: false
    });
    let id = this.props.match.params.id;

    let body = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone,
      password: this.state.details.password,
      email: this.state.details.email,
      type_id: this.state.details.type_id
    };
    console.log(id);
    let response = await UserService.update(id, body);
    console.log(response);
    if (response.ok) {
      console.log(response);
      this.setState({
        success: true,
        messageSucces: "update"
      });
      this.props.history.push("/Admin");
    } else {
      console.log("erreur");
    }
  }
  async componentDidMount() {
    if (this.state.details) {
      this.setState({
        firstName: this.state.details.firstName,
        lastName: this.state.details.lastName,
        phone: this.state.details.phone
      });
    }
    let id = this.props.match.params.id;
    console.log(id);
    let response = await UserService.details(id);

    if (response.ok) {
      let data = await response.json();

      this.setState({
        details: data.user
      });
    }
  }
  render(h) {
    return (
      <form onSubmit={e => this.onSumbite(e)}>
        <ul class="form-style-1">
          <li>
            <label>
              Full Name <span class="required">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              defaultValue={this.state.details.firstName}
              class="field-divided"
              placeholder="First"
              onChange={e => this.handleChange(e)}
            />{" "}
            <input
              type="text"
              name="lastName"
              defaultValue={this.state.details.lastName}
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
              defaultValue={this.state.details.email}
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
              defaultValue={this.state.details.phone}
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
    );
  }
}
export default withRouter(UpdateUser);
