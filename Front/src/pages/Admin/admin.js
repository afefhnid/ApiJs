import React, { Component } from "react";
import User from "./user";
import Compagny from "./compagny";
import UserService from "../../services/user.service";
import CompanyService from "../../services/company.service";
import NavHero from "../../components/NavHero/index";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Blog Compagny",
      users: [],
      compagny: [],
      displayUser: "block",
      displayCompagny: "none"
    };
  }
  /**
   * get the list off Users and Compagny
   */
  async componentDidMount() {
    let response = await UserService.list();
    if (response.ok) {
      let data = await response.json();
      this.setState({
        users: data
      });
    }
    let responseCompagny = await CompanyService.list();
    if (responseCompagny.ok) {
      let data = await responseCompagny.json();
      this.setState({
        compagny: data
      });
    }
  }
  /**
   * upadate user
   * @param {id} id
   */
  async updateUser(id) {
    this.props.history.push(`/update/${id}`);
  }
  /**
   * upadate compagny
   * @param {id} id
   */
  async updatecompagny(id) {
    this.props.history.push(`/Company/update/${id}`);
  }
  /**
   * Delete User
   * @param {id} id
   */
  async deleteUser(id) {
    let response = await UserService.delete(id);
    if (response.ok) {
      console.log(response);
      let users = this.state.users;
      let index = this.state.users.users.findIndex(users => users.id === id);
      users.users.splice(index, 1);
      this.setState({ users: users });
    } else {
      console.log(response);
    }
  }
  /**
   * Delete Compagny
   * @param {id} id
   */
  async deleteCompagany(id) {
    let response = await CompanyService.delete(id);
    if (response.ok) {
      let compagny = this.state.compagny;
      let index = this.state.compagny.company.findIndex(
        compagny => compagny.id === id
      );
      compagny.company.splice(index, 1);
      this.setState({ compagny: compagny });
    } else {
      console.log(response);
    }
  }

  /**
   * switch view user /compagny
   */
  getUser() {
    this.setState({
      displayUser: "block",
      displayCompagny: "none"
    });
  }
  getcompany() {
    this.setState({
      displayCompagny: "block",
      displayUser: "none"
    });
  }
  /**
   * add user compagny and Ticket
   */

  adduser() {
    this.props.history.push("/addUser");
  }
  addcompany() {
    this.props.history.push("/addCompany");
  }

  addTicket(id) {
    this.props.history.push(`/addTicket/${id}`);
  }
  /**
   * get tickets list
   */
  getTicket() {
    this.props.history.push("/Ticket");
  }

  render() {
    return (
      <div>
        <NavHero trie={trieValue => this.setTrie(trieValue)} />
        <div
          style={{
            padding: "15px 0px 42px 0px",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <button className="buttonLogin" onClick={() => this.getUser()}>
            User
          </button>
          <button className="buttonLogin" onClick={() => this.getcompany()}>
            Company
          </button>
          <button className="buttonLogin" onClick={() => this.getTicket()}>
            Ticket
          </button>
        </div>
        <div style={{ display: this.state.displayUser }}>
          <h1 style={{ color: "#c06eef", fontSize: "37px" }}>Blog Users</h1>

          <button onClick={() => this.adduser()} id="login-btn">
            Ajouter un users
          </button>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Supprimer</th>
                  <th>Modifier</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.users ? (
                  this.state.users.users.map((item, index) => {
                    return (
                      <User
                        key={index}
                        data={item}
                        index={index}
                        deletePost={id => this.deleteUser(id)}
                        updateUser={id => this.updateUser(id)}
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
        <div style={{ display: this.state.displayCompagny }}>
          <h1 style={{ color: "#c06eef", fontSize: "37px" }}>
            {this.state.title}{" "}
          </h1>
          <button id="login-btn" onClick={() => this.addcompany()}>
            Ajouter une compagny
          </button>
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
                  <th>Ajouter Ticket</th>
                </tr>
              </thead>
              <tbody>
                {this.state.compagny.company ? (
                  this.state.compagny.company.map((item, index) => {
                    return (
                      <Compagny
                        key={index}
                        data={item}
                        index={index}
                        deleteCompagany={id => this.deleteCompagany(id)}
                        updatecompagny={id => this.updatecompagny(id)}
                        addTicket={id => this.addTicket(id)}
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
      </div>
    );
  }
}

export default Admin;
