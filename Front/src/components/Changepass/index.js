import React from "react";
import SplitPage from "./../SplitPage";
import SignIn from "./../SignIn";
import navigate from "./../../util/navigate.js";
import useFakeAuth from "./../../util/use-fake-auth.js";

function Changepass(props) {
    const [auth, signin, signout] = useFakeAuth();

    const onChangePass = ({ pass, confirmPass }) => {
        // You'd do an API call here to change pass
        // then redirect to home (or some other page)
        navigate.push(`/`);
    };

    return (
        <SplitPage>
            <SignIn mode="changepass" onSubmit={onChangePass} />
        </SplitPage>
    );
}

export default Changepass;
