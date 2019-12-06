import React, { Component } from "react";
import CompanyService from "../../services/company.service";
import Navbar from "../../components/Navbar/index";
import "./det.css";

class DetailsCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {}
    };
  }
  async componentDidMount() {
    let id = this.props.match.params.id;
    console.log(id);
    let response = await CompanyService.details(id);
    if (response.ok) {
      let data = await response.json();

      this.setState({
        details: data.company
      });
    }
    console.log(this.state.details);
  }
  async reserveTicket(item) {
    this.setState({
      success: false
    });
    let idCompany = this.state.details._id;
    let idTicket = item._id;
    console.log(item);
    console.log(JSON.parse(localStorage.getItem("user"))._id);
    let body = {
      date: item.date,
      prix: item.prix,
      destination: item.destination,
      company_id: item.company_id,
      user_id: JSON.parse(localStorage.getItem("user"))._id
    };

    console.log(body);
    let response = await CompanyService.updateTicket(idCompany, idTicket, body);
    console.log(response);
    if (response.ok) {
      console.log(response);
      this.setState({
        success: true,
        messageSucces: "update"
      });
      // this.props.history.push("/Admin");
    } else {
      console.log("erreur");
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
          {this.state.details ? (
            <div className="Column">
              <img
                src={this.state.details.image}
                alt="Product Friday"
                className="Logo"
                style={{ marginBottom: "30px" }}
              />
              <p style={{ lineHeight: "1.8" }}>
                {this.state.details.description} <br />
                <span className="Span">
                  <br />
                  <br />
                  Billets Disponibles.{" "}
                </span>
              </p>

              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Destination</th>
                    <th>Prix</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.details.ticket ? (
                    this.state.details.ticket.map((item, index) => {
                      console.log(item.user_id);
                      return (
                        <tr key={this.props.index}>
                          <td>{index + 1}</td>
                          <td>{item.destination}</td>
                          <td>{`${item.prix} Euro`}</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => this.reserveTicket(item)}
                            >
                              {" "}
                              Réserver{" "}
                            </button>
                          </td>
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
            <div>Pad déeails</div>
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
export default DetailsCompany;
