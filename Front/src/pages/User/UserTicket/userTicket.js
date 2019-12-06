import React, { Component } from "react";
import CompanyService from "../../../services/company.service";

import "./userTicket.css";
import Navbar from "../../../components/Navbar/index";
class UserTickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: []
    };
  }
  /**
   * avoire la liste des tickets pour chaque user
   * params idUser
   */
  async componentDidMount() {
    let id = JSON.parse(localStorage.getItem("user"))._id;
    if (id) {
      let response = await CompanyService.getCompanyByName(id);

      if (response.ok) {
        let data = await response.json();
        this.setState({
          tickets: data.tickets
        });
      }
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="App">
          <img
            className="VectorTop"
            src="/assets/top-left-vector.svg"
            alt="geometric"
          />
          {this.state.tickets ? (
            <div className="Column">
              <h1>Panier de Tickets</h1>
              <p style={{ lineHeight: "1.8" }}>
                <br />
                <span className="Span">
                  <br />
                  <br />
                  Voici vos Billets.
                </span>
              </p>

              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Destination</th>
                    <th>Prix</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tickets ? (
                    this.state.tickets.map((item, index) => {
                      return (
                        <tr key={this.props.index}>
                          <td>{index + 1}</td>
                          <td>{item.destination}</td>
                          <td>{`${item.prix} Euro`}</td>
                          <td>{`${item.date} `}</td>
                        </tr>
                      );
                    })
                  ) : (
                    <div>no</div>
                  )}
                </tbody>
              </table>
            </div>
          ) : (
            <div>Pad dÃ©eails</div>
          )}
          <img
            className="VectorBottom"
            src="/assets/bottom-right-vector.svg"
            alt="geometric"
          />
        </div>
      </div>
    );
  }
}
export default UserTickets;
