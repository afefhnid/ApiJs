import React from "react";
import Features from "./../Features";
import "./styles.scss";

function FeaturesSection(props) {
  return (
    <section className="section">
      <div className="container">
        <div className="FeaturesSection__frame">
          <Features items={props.company} />
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
