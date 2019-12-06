import React from "react";
import Pricing from "./../Pricing";
import "./styles.scss";

function PricingSection(props) {
    return (
        <section className="section is-medium" id="pricing">
            <div className="PricingSection__container container">
                <header className="section-header">
                    <h1 className="title">Pricing</h1>
                </header>
                <Pricing
                    items={[
                        {
                            timespan: "Monthly",
                            price: "29",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam."
                        },
                        {
                            timespan: "Yearly",
                            price: "19",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae.",
                            emphasized: true
                        }
                    ]}
                />
            </div>
        </section>
    );
}

export default PricingSection;
