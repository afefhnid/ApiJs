import React, { Component } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
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
  componentWillMount() {
    console.log("je suis la");
  }
  async componentDidMount() {
    //recuperer des postes sepuis l'Api
    console.log("test");
    let response = await UserService.list();
    if (response.ok) {
      //la rÃ©ponse est de type 200
      let data = await response.json();
      console.log(data);
      this.setState({
        users: data
      });
    }
    let responseCompagny = await CompanyService.list();
    if (responseCompagny.ok) {
      //la rÃ©ponse est de type 200
      let data = await responseCompagny.json();
      console.log(data);
      this.setState({
        compagny: data
      });
    }
  }
  async updateUser(id) {
    this.props.history.push(`/update/${id}`);
  }
  async updatecompagny(id) {
    this.props.history.push(`/Company/update/${id}`);
  }
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
  async deleteCompagany(id) {
    let response = await CompanyService.delete(id);
    if (response.ok) {
      console.log(response);
      let compagny = this.state.compagny;
      console.log(compagny);
      let index = this.state.compagny.company.findIndex(
        compagny => compagny.id === id
      );
      compagny.company.splice(index, 1);
      this.setState({ compagny: compagny });
    } else {
      console.log(response);
    }
  }

  getUser() {
    this.setState({
      displayUser: "block",
      displayCompagny: "none"
    });
  }
  adduser() {
    this.props.history.push("/addUser");
  }
  addcompany() {
    this.props.history.push("/addCompany");
  }
  getcompany() {
    this.setState({
      displayCompagny: "block",
      displayUser: "none"
    });
  }
  getTicket() {
    this.props.history.push("/Ticket");
  }
  addTicket(id) {
    this.props.history.push(`/addTicket/${id}`);
  }
  render() {
    console.log(this.state.compagny);
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
          <h1 style={{ color: "red" }}>{this.state.title}</h1>

          <button onClick={() => this.adduser()} id="login-btn">
            Ajouter une users
          </button>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Date de naissance</th>
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
          <h1 style={{ color: "red" }}>{this.state.title} </h1>
          <button onClick={() => this.addcompany()}>
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
