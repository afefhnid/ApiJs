import React, { Component } from "react";
import NavHero from "./../NavHero";
import FeaturesSection from "./../FeaturesSection";
import ClientsSection from "./../ClientsSection";
import TestimonialsSection from "./../TestimonialsSection";
//import PricingSection from "./../PricingSection";
import Divider from "./../Divider";
import Footer from "./../Footer";
import "./styles.scss";
import CompanyService from "../../services/company.service";
class HomeLoggedOut extends Component {
  constructor(props) {
    super(props);
    this.menu = null;
    this.state = {
      company: null
    };
  }

  async componentDidMount() {
    this.setState({
      success: false
    });

    let response = await CompanyService.list();
    if (response.ok) {
      let data = await response.json();
      console.log(data.company);

      this.setState({
        company: data.company
      });
    }
  }
  async setTrie(trieValue) {
    console.log(this.state.company);
    if (trieValue) {
      let body = {};
      this.state.company.map((item, index) => {
        if (item.name === trieValue) {
          console.log(this.state.company);
          body = {
            name: trieValue
          };
        }
      });

      let response = await CompanyService.getCompanyByName(body);
      if (response.ok) {
        let data = await response.json();
        if (data.company) {
          console.log(data.company);
          this.setState({
            company: [data.company]
          });
        }
      }
    }
  }
  render(h) {
    return (
      <>
        <div>
          <NavHero trie={trieValue => this.setTrie(trieValue)} />
        </div>

        {this.state.company ? (
          <FeaturesSection company={this.state.company} />
        ) : (
          <div>Pas compzny</div>
        )}
        <TestimonialsSection />
        {/* <PricingSection />*/}
        <Divider />
      </>
    );
  }
}

export default HomeLoggedOut;
