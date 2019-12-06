import React, { Component } from "react";
import { Link } from "react-router-dom";
class User extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props.data);
  }
  //'c'/post/id est la route
  render() {
    return (
      <tr key={this.props.index}>
        <td>
          <Link
            to={`/user/details/${this.props.data._id}
          `}
          >
            {this.props.index + 1}
          </Link>
        </td>

        <td>{this.props.data.name}</td>
        <td>{this.props.data.email}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => this.props.deletePost(this.props.data._id)}
            style={{ backgroundColor: "red" }}
          >
            Supprimer
          </button>
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => this.props.updateUser(this.props.data._id)}
            style={{ backgroundColor: "#3c5ab8" }}
          >
            Modifier
          </button>
        </td>
      </tr>
    );
  }
}
export default User;
