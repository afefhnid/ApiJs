import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";
class Ticket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

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
  //'c'/post/id est la route
  render() {
    return (
      <tr key={this.props.index}>
        <td>
          <Link
            to={`post/${this.props.data.id}
          `}
          >
            {this.props.data.id}
          </Link>
        </td>

        <td> {this.props.data.destination} </td>
        <td>
          {" "}
          {this.props.data.date ? this.props.data.date.substring(0, 10) : null}
        </td>
        <td> {this.props.data.prix}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() =>
              this.props.deletePost(
                this.props.data._id,
                this.props.data.company_id
              )
            }
            style={{ backgroundColor: "red" }}
          >
            Supprimer
          </button>
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() =>
              this.props.updateTicket(
                this.props.data.company_id,
                this.props.data._id
              )
            }
            style={{ backgroundColor: "#3c5ab8" }}
          >
            Modifier
          </button>
        </td>
      </tr>
    );
  }
}
export default withRouter(Ticket);
