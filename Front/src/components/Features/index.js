import React from "react";
import "./styles.scss";
import { Link } from 'react-router-dom';

function Features(props) {
    console.log(props)
    return (
        <div className="Features columns is-multiline is-centered is-gapless">
            {props.items.map((item, index) => (
                <div className="Features__column column is-half" key={index}>
                    <div className="Features__no-classname has-text-centered">
                        <figure className="Features__image image">
                            <img src={item.image} />
                        </figure>

                        <h1 className="title is-4 is-spaced">{item.name}</h1>
                        <h2 className="subtitle is-6">{item.description}</h2>
                        <h3 className="subtitle is-6">{item.birthdayCompany}</h3>
                        <Link to={`Company/${item._id}
                `} >             <button className="button button-primary">
                                <i className="fa fa-chevron-right"></i> Find out more
                                </button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Features;
