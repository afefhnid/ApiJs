import React from "react";
import SplitPage from "./../SplitPage";
import SignIn from "./../SignIn";
import navigate from "./../../util/navigate.js";
import useFakeAuth from "./../../util/use-fake-auth.js";
import "./styles.scss";

function Signin(props) {
    const [auth, signin, signout] = useFakeAuth();

    const onSignin = ({ email, pass }) => {
        signin(() => {
            navigate.push(`/`);
        });
    };

    return (
        <SplitPage>
            <SignIn mode="signin" onSubmit={onSignin} />
        </SplitPage>
    );
}

export default Signin;
