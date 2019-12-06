import React from "react";
import CompanyService from "../../../services/company.service";
import { withRouter } from "react-router-dom";

class UpdateCompany extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      birthdayCompany: "",
      destination: "",
      details: []
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  async onSumbite(e) {
    e.preventDefault();
    this.setState({
      success: false
    });
    let id = this.props.match.params.id;

    let body = {
      name: this.state.name,
      birthdayCompany: this.state.birthdayCompany,
      destination: this.state.destination
    };
    let response = await CompanyService.update(id, body);
    if (response.ok) {
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
        name: this.state.details.name,
        birthdayCompany: this.state.details.birthdayCompany,
        destination: this.state.details.destination
      });
    }
    let id = this.props.match.params.id;
    let response = await CompanyService.details(id);

    if (response.ok) {
      let data = await response.json();
      this.setState({
        details: data.company
      });
    }
  }
  render(h) {
    return (
      <form onSubmit={e => this.onSumbite(e)}>
        <ul class="form-style-1">
          <li>
            <label>
              Name <span class="required">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              defaultValue={this.state.details.name}
              class="field-divided"
              placeholder="Enter name"
              onChange={e => this.handleChange(e)}
            />
          </li>
          <li>
            <label>
              Birthday Company <span class="required">*</span>
            </label>
            <input
              type="text"
              name="birthdayCompany"
              defaultValue={this.state.details.birthdayCompany}
              class="field-long"
              placeholder="birthdayCompany"
              onChange={e => this.handleChange(e)}
            />
          </li>
          <li>
            <label>
              Destination <span class="required">*</span>
            </label>
            <input
              type="text"
              name="destination"
              id="destination"
              defaultValue={this.state.details.destination}
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
export default withRouter(UpdateCompany);
