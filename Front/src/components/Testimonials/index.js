import React from "react";
import "./styles.scss";

function Testimonials(props) {
    return (
        <div className="columns is-multiline is-centered">
            {props.items.map(item => (
                <div className="Testimonials__column column">
                    <figure className="Testimonials__no-classname testimonial">
                        <blockquote className="Testimonials__quote">
                            "{item.quote}"
            </blockquote>
                        <div className="Testimonials__author">
                            <img className="Testimonials__avatar" src={item.avatar} />
                            <div className="Testimonials__info">
                                <div className="has-text-weight-bold">{item.name}</div>
                                <div className="Testimonials__company">{item.company}</div>
                            </div>
                        </div>
                    </figure>
                </div>
            ))}
        </div>
    );
}

export default Testimonials;
