import React from "react";
import CompanyService from "../../../services/company.service";
import { withRouter } from "react-router-dom";

class UpdateTicket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      destination: "",
      date: "",
      prix: "",
      details: []
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  async onSumbite(e) {
    e.preventDefault();
    this.setState({
      success: false
    });
    let idTicket = this.props.match.params.idTicket;
    let body = {
      date: this.state.date,
      prix: this.state.prix,
      destination: this.state.destination,
      company_id: this.state.details.company_id
    };
    let response = await CompanyService.updateTicket(
      this.state.details.company_id,
      idTicket,
      body
    );
    if (response.ok) {
      this.setState({
        success: true,
        messageSucces: "update"
      });
      this.props.history.push("/Ticket");
    } else {
      console.log("erreur");
    }
  }
  /**
   * pré-remplir le formulaire
   */
  async componentDidMount() {
    if (this.state.details) {
      this.setState({
        prix: this.state.details.prix,
        destination: this.state.details.destination,
        date: this.state.details.date
      });
    }
    let id = this.props.match.params.idTicket;
    let response = await CompanyService.getTicketByUser(id);
    if (response.ok) {
      let data = await response.json();
      if (data.tickets) {
        this.setState({
          details: data.tickets[0],
          destination: data.tickets[0].destination,
          date: data.tickets[0].date,
          prix: data.tickets[0].prix
        });
      }
    }
  }
  render(h) {
    return (
      <form onSubmit={e => this.onSumbite(e)}>
        {this.state.details ? (
          <ul class="form-style-1">
            <li>
              <label>
                Destination <span class="required">*</span>
              </label>
              <input
                type="text"
                name="destination"
                id="destination"
                defaultValue={this.state.details.destination}
                class="field-divided"
                placeholder="destination"
                onChange={e => this.handleChange(e)}
              />
            </li>
            <li>
              <label>
                Date <span class="required">*</span>
              </label>
              <input
                type="date"
                name="date"
                id="date"
                defaultValue={
                  this.state.date ? this.state.date.substring(0, 10) : null
                }
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
                name="prix"
                id="prix"
                defaultValue={this.state.details.prix}
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
        ) : null}
      </form>
    );
  }
}
export default withRouter(UpdateTicket);
