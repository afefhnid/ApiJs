import React from "react";
import DemoTipBox from "./../DemoTipBox";
import navigate from "./../../util/navigate.js";
import useFakeAuth from "./../../util/use-fake-auth.js";
import "./styles.scss";

function ForgotPassDemoTip(props) {
  const [auth, signin, signout] = useFakeAuth();

  // Mimic auto-auth from pass reset link
  const authAndGoToChangePass = () => {
    signin(() => {
      navigate.push(`/changepass`);
    });
  };

  return (
    <DemoTipBox>
      <a onClick={authAndGoToChangePass}>Click here</a>
      {` `}to show the UI you'd see after coming from the password reset email.
    </DemoTipBox>
  );
}

export default ForgotPassDemoTip;
