import React from "react";
import HomeLoggedOut from "./../HomeLoggedOut";
import HomeLoggedIn from "./../HomeLoggedIn";
import useFakeAuth from "./../../util/use-fake-auth.js";
import "./styles.scss";

function Home(props) {
    const [auth, signin, signout] = useFakeAuth();

    return (
        <>
            {auth === false && <HomeLoggedOut signin={signin} />}

            {auth === true && <HomeLoggedIn signout={signout} />}
        </>
    );
}

export default Home;
