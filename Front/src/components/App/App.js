import React from "react";
import Home from "./../Home";
import "./App.css";
import Forgotpass from "./../Forgotpass";
import Changepass from "./../Changepass";
import UserUsername from "../../pages/UserUsername";
import { Switch, Route, Router, BrowserRouter } from "react-router-dom";
import navigate from "./../../util/navigate.js";
import DetailsCompany from "../../pages/detailsCompany/companyDetails";
import Signin from "./../Signinn";
import Signup from "./../Signup";
import LoginPage from "../../pages/login/loginPage";
import Admin from "../../pages/Admin/admin";
import TicketPage from "../../pages/Ticket/ticket";
import UpdateUser from "../../components/UserUpdate/updateUser";
import UpdateCompany from "../../components/UpdateCompany/updateCompany";
import UpdateTicket from "../../pages/UpdateTicket/updateTicket";
import AddUser from "../../pages/AddUser/addUser";
import AddCompany from "../../pages/AddCompany/addCompany";
import AddTicket from "../../pages/AddTicket/addTicket";
import UserTickets from "../../pages/UserTicket/userTicket";
import Footer from "../Footer/index";
import UserDetails from "../../pages/detailsUser/detailsUser";
function App(props) {
  return (
    <BrowserRouter>
      <Router history={navigate}>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route exact path="/Ticket" component={TicketPage} />
          <Route exact path="/UserTickets" component={UserTickets} />
          <Route exact path="/update/:id" component={UpdateUser} />

          <Route exact path="/Home" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/Admin" component={Admin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/forgotpass" component={Forgotpass} />
          <Route exact path="/changepass" component={Changepass} />
          <Route exact path="/user/:username" component={UserUsername} />
          <Route path="/Company/:id" exact component={DetailsCompany} />
          <Route path="/user/details/:id" exact component={UserDetails} />
          <Route
            exact
            path="/Ticket/update/:idCompany/ticket/:idTicket"
            component={UpdateTicket}
          />
          <Route exact path="/Company/update/:id" component={UpdateCompany} />
          <Route exact path="/addUser" component={AddUser} />
          <Route exact path="/addCompany" component={AddCompany} />
          <Route exact path="/addTicket/:id" component={AddTicket} />

          <Route
            component={({ location }) => {
              return (
                <div style={{ padding: "20px" }}>
                  The page <code>{location.pathname}</code> could not be found
                  😿
                </div>
              );
            }}
          />
        </Switch>
      </Router>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
