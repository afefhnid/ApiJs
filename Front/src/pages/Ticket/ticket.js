import React, { Component } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import Ticket from "../../components/Ticket/ticket";
import UserService from "../../services/user.service";
import CompanyService from "../../services/company.service";
import Navbar from "../../components/Navbar";

class TicketPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Blog Compagny",
      tickets: []
    };
  }
  componentWillMount() {
    console.log("je suis la");
  }
  async componentDidMount() {
    //recuperer des postes sepuis l'Api
    console.log("test");
    let response = await CompanyService.getTickets();
    if (response.ok) {
      //la rÃ©ponse est de type 200
      let data = await response.json();
      console.log(data);
      this.setState({
        tickets: data
      });
    }
  }
  async deletePost(idCompany, idTicket) {
    let response = await CompanyService.deleteTicket(idCompany, idTicket);
    if (response.ok) {
      console.log(response);
      let tickets = this.state.tickets;

      let index = this.state.tickets.tickets.findIndex(
        tickets => tickets._id === idTicket
      );
      console.log(tickets);
      tickets.tickets.splice(index, 1);
      this.setState({ tickets: tickets });
    } else {
      console.log(response);
    }
  }
  async updateTicket(idCompany, idTicket) {
    console.log("idCompany", idCompany);
    console.log("idTicket", idTicket);
    this.props.history.push(`/Ticket/update/${idCompany}/ticket/${idTicket}`);
  }
  render() {
    console.log(this.state.compagny);
    return (
      <div>
        <Navbar />
        <h1 style={{ color: "red" }}>{this.state.title} </h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Date de naissance</th>
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
                        this.deletePost(idCompany, idTicket)
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
