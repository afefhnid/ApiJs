import React from "react";
import "./styles.scss";

function Clients(props) {
    return (
        <div className="columns is-centered is-multiline">
            {props.items.map((item, index) => (
                <div className="Clients__column column is-narrow" key={index}>
                    <div className="Clients__logo">
                        <img src={item.image} width={item.width} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Clients;
