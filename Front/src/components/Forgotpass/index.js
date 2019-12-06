import React from "react";
import SplitPage from "./../SplitPage";
import SignIn from "./../SignIn";
import "./styles.scss";

function Forgotpass(props) {
    return (
        <SplitPage>
            <SignIn mode="forgotpass" />
        </SplitPage>
    );
}

export default Forgotpass;
