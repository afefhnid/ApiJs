import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";

class Compagny extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  /**
   * show ticket for compagny
   */
  openInfo() {
    if (this.state.isOpen === false) {
      this.setState({ isOpen: true });
    } else {
      this.setState({ isOpen: false });
    }
  }
  showTicket() {
    this.props.history.push("/Ticket");
  }

  render() {
    return (
      <tr key={this.props.index}>
        <td>{this.props.index + 1}</td>

        <td>
          {" "}
          {this.props.data.ticket.length !== 0 ? (
            <FontAwesomeIcon icon={faPlus} onClick={() => this.openInfo()} />
          ) : null}
          {this.props.data.name}
          {this.state.isOpen ? (
            <div>
              {this.props.data.ticket.length !== 0 ? (
                <div
                  style={{ display: "flex", justifyContent: " space-between" }}
                >
                  {this.props.data.ticket.length < 2 ? (
                    this.props.data.ticket.map((item, index) => {
                      return <div>{item.destination}</div>;
                    })
                  ) : (
                    <div>{` ${this.props.data.ticket.length} tickets existe `}</div>
                  )}
                  <button
                    style={{ backgroundColor: "#7c64d3" }}
                    onClick={() => this.showTicket()}
                  >
                    Show
                  </button>
                </div>
              ) : null}
            </div>
          ) : null}
        </td>

        <td>{this.props.data.name}</td>
        <td>{this.props.data.email}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => this.props.deleteCompagany(this.props.data._id)}
            style={{ backgroundColor: "red" }}
          >
            Supprimer
          </button>
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => this.props.updatecompagny(this.props.data._id)}
            style={{ backgroundColor: "#3c5ab8" }}
          >
            Modifier
          </button>
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => this.props.addTicket(this.props.data._id)}
          >
            Ajouter un ticket
          </button>
        </td>
      </tr>
    );
  }
}
export default withRouter(Compagny);
