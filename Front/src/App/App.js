import React from "react";
import { Switch, Route, Router, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home/index";
import Footer from "../components/Footer/index";
import UserUsername from "../pages/User/UserUsername";
import navigate from "../util/navigate.js";
import DetailsCompany from "../pages/Compagny/detailsCompany/companyDetails";
import LoginPage from "../pages/login/loginPage";
import Admin from "../pages/Admin/admin";
import TicketPage from "../pages/Tickets/Ticket/ticket";
import UpdateUser from "../pages/User/UserUpdate/updateUser";
import UpdateCompany from "../pages/Compagny/UpdateCompany/updateCompany";
import UpdateTicket from "../pages/Tickets/UpdateTicket/updateTicket";
import AddUser from "../pages/User/AddUser/addUser";
import AddCompany from "../pages/Compagny/AddCompany/addCompany";
import AddTicket from "../pages/Tickets/AddTicket/addTicket";
import UserTickets from "../pages/User/UserTicket/userTicket";

import UserDetails from "../pages/User/detailsUser/detailsUser";
import "./App.css";
function App(props) {
  return (
    <div>
      <BrowserRouter>
        <Router history={navigate}>
          <Switch>
            <Route path="/" exact component={LoginPage} />
            <Route exact path="/UserTickets" component={UserTickets} />
            <Route exact path="/user/:username" component={UserUsername} />
            <Route path="/user/details/:id" exact component={UserDetails} />
            <Route exact path="/update/:id" component={UpdateUser} />
            <Route exact path="/addUser" component={AddUser} />
            <Route exact path="/Ticket" component={TicketPage} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Admin" component={Admin} />
            <Route path="/Company/:id" exact component={DetailsCompany} />
            <Route
              exact
              path="/Ticket/update/:idCompany/ticket/:idTicket"
              component={UpdateTicket}
            />
            <Route exact path="/Company/update/:id" component={UpdateCompany} />
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
    </div>
  );
}

export default App;
