import React from "react";
import Navbar from "./../Navbar";
import Footer from "./../Footer";
import "./styles.scss";

function HomeLoggedIn(props) {
    return (
        <>
            <Navbar />
            <div className="HomeLoggedIn__replace-this section is-large has-text-centered">
                <div className="container">Signed in homepage (replace me)</div>
            </div>
            <Footer />
        </>
    );
}

export default HomeLoggedIn;
