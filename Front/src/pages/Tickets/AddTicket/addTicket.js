import React from "react";
import CompanyService from "../../../services/company.service";
import { withRouter } from "react-router-dom";

class AddTicket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      destination: "",
      date: "",
      prix: "",
      success: false,
      messageSucces: ""
    };
  }
  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  //Add tickets
  async onSumbite(e) {
    let id = this.props.match.params.id;
    e.preventDefault();
    this.setState({
      success: false
    });
    let body = {
      date: this.state.date,
      prix: this.state.prix,
      destination: this.state.destination
    };

    let response = await CompanyService.addTicket(id, body);
    if (response.ok) {
      this.setState({
        success: true,
        messageSucces: "authentication"
      });
      this.props.history.push("/Home");
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
          <label for="exampleInputEmail1" className="label">
            destination
          </label>
          <input
            type="text"
            className="input"
            name="destination"
            id="destination"
            aria-describedby="name"
            placeholder="Enter name"
            onChange={e => this.handleChange(e)}
          />
          <label for="exampleInputPassword1" className="label">
            date
          </label>
          <input
            type="text"
            name="date"
            id="date"
            className="input"
            placeholder="Password"
            onChange={e => this.handleChange(e)}
          />
          <label for="exampleInputPassword1" className="label">
            prix
          </label>
          <input
            type="text"
            name="prix"
            id="prix"
            className="input"
            placeholder="Password"
            onChange={e => this.handleChange(e)}
          />
        </div>
        <button type="submit" id="login-btn">
          Submit
        </button>
      </form>
    );
  }
}

export default withRouter(AddTicket);
