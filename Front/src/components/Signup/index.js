import React from "react";
import SplitPage from "./../SplitPage";
import SignIn from "./../SignIn";
import navigate from "./../../util/navigate.js";
import useFakeAuth from "./../../util/use-fake-auth.js";
import "./styles.scss";

function Signup(props) {
    const [auth, signin, signout] = useFakeAuth();

    const onSignup = ({ email, pass, confirmPass }) => {
        signin(() => {
            navigate.push(`/`);
        });
    };

    return (
        <SplitPage>
            <SignIn mode="signup" onSubmit={onSignup} />
        </SplitPage>
    );
}

export default Signup;
