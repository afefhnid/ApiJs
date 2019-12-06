import React, { Component } from "react";
import Ticket from "../../../components/Ticket/ticket";
import CompanyService from "../../../services/company.service";
import Navbar from "../../../components/Navbar";

class TicketPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Blog Tickets",
      tickets: []
    };
  }

  /**
   * get all tickets
   */
  async componentDidMount() {
    let response = await CompanyService.getTickets();
    if (response.ok) {
      let data = await response.json();
      this.setState({
        tickets: data
      });
    }
  }
  /**
   * Delete Ticket
   * @param {idCompany} idCompany
   * @param {idTicket} idTicket
   */
  async deleteTicket(idCompany, idTicket) {
    let response = await CompanyService.deleteTicket(idCompany, idTicket);
    if (response.ok) {
      let tickets = this.state.tickets;
      let index = this.state.tickets.tickets.findIndex(
        tickets => tickets._id === idTicket
      );
      tickets.tickets.splice(index, 1);
      this.setState({ tickets: tickets });
    } else {
      console.log(response);
    }
  }
  /**
   *
   * @param {idCompany} idCompany
   * @param {idTicket} idTicket
   */
  async updateTicket(idCompany, idTicket) {
    this.props.history.push(`/Ticket/update/${idCompany}/ticket/${idTicket}`);
  }
  render() {
    return (
      <div>
        <Navbar />
        <h1 style={{ color: "#c06eef", fontSize: "37px" }}>
          {this.state.title}{" "}
        </h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>destination</th>
                <th>Date</th>
                <th>Prix</th>
                <th>Supprimer</th>
                <th>Modifier</th>
              </tr>
            </thead>
            <tbody>
              {this.state.tickets.tickets ? (
                this.state.tickets.tickets.map((item, index) => {
                  return (
                    <Ticket
                      key={index}
                      data={item}
                      deletePost={(idCompany, idTicket) =>
                        this.deleteTicket(idCompany, idTicket)
                      }
                      updateTicket={(idCompany, idTicket) =>
                        this.updateTicket(idCompany, idTicket)
                      }
                    />
                  );
                })
              ) : (
                <div>aucun post disponible</div>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TicketPage;
