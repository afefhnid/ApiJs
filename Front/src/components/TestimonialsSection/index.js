import React from "react";
import Testimonials from "./../Testimonials";
import "./styles.scss";

function TestimonialsSection(props) {
  return (
    <section className="TestimonialsSection section is-medium">
      <div className="container">
        <header className="section-header">
          <h1 className="title has-text-centered has-text-white">
            Le monde est un livre et ceux qui ne voyagent pas n’en lisent qu’une
            page.{" "}
          </h1>
        </header>
        <Testimonials
          items={[
            {
              avatar:
                "http://www.alphafoxicare.com/wp-content/uploads/2012/08/Vacances-%C3%A0-Belle-Ile.jpg",
              name: "Maher Knis",
              quote:
                "Les tarifs de dernière minute peuvent concerner les vols secs aussi bien que les vols avec prestations supplémentaires.Profitez de nos offres exclusives.",
              company: ""
            },
            {
              avatar:
                "https://image.freepik.com/photos-gratuite/passeport-avion-boussole-place-carte-concept-voyage_11304-1164.jpg",
              name: "Afef Hnid",
              quote:
                "Les réservations de billets d’avion de dernière minute sont particulièrement adaptées aux personnes qui n'ont pas de contraintes de planning tant au niveau professionnel que familial!",
              company: ""
            },
            {
              avatar:
                "https://www.govoyages.com/blog/wp-content/uploads/sites/14/2013/05/passport-2733068_960_720-960x617.jpg",
              name: "Maher Afef",
              quote:
                "Ce type de vol permet de profiter d'opportunités inattendues et de découvrir des destinations auxquelles on n'aurait pas songé sans ces promotions.",
              company: ""
            }
          ]}
        />
      </div>
    </section>
  );
}

export default TestimonialsSection;
