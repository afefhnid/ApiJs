import React, { useState } from "react";
import ForgotPassDemoTip from "./../ForgotPassDemoTip";
import { Link } from "react-router-dom";
import "./styles.scss";

function SignIn(props) {
    const { mode, onSubmit } = props;

    // Call this function to change modes
    // Re-sets showErrors then calls onChangeMode prop
    const setMode = mode => {
        setShowErrors(false);
        //   onChangeMode(mode);
    };

    // State for all inputs
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    // Whether to show errors
    // We set to true if they submit and there are errors.
    // We only show errors after they submit because
    // it's annoying to see errors while typing.
    const [showErrors, setShowErrors] = useState(false);

    // Whether form was submitted sucessfully
    // so we can display a post-submit message such as
    // forgotpass letting user know to check email.
    const [submitted, setSubmitted] = useState(false);

    // Error array we'll populate
    let errors = [];
    // Function for fetching error for a field
    const getError = field => {
        return errors.find(e => e.field === field);
    };
    // Function to see if field is empty
    const isEmpty = val => val.trim() === "";

    // For all 3 modes check email
    if (["signin", "signup", "forgotpass"].includes(mode)) {
        if (isEmpty(email)) {
            errors.push({
                field: "email",
                message: "Please enter an email"
            });
        }
    }

    // For signin and signup check pass
    if (["signin", "signup", "changepass"].includes(mode)) {
        if (isEmpty(pass)) {
            errors.push({
                field: "pass",
                message: "Please enter a password"
            });
        }
    }

    // For signup check confirmPass
    if (["signup", "changepass"].includes(mode)) {
        if (isEmpty(confirmPass)) {
            errors.push({
                field: "confirmPass",
                message: "Please confirm password"
            });
            // And make sure it matches pass
        } else if (pass !== confirmPass) {
            errors.push({
                field: "confirmPass",
                message: `This doesn't match your password`
            });
        }
    }

    // Handle form submission
    const handleSubmit = e => {
        e.preventDefault();

        // Show errors if submitted and we have errors
        if (errors.length && showErrors === false) {
            setShowErrors(true);
        } else {
            // Pass credentials into onSubmit callback
            if (onSubmit) {
                onSubmit({
                    email,
                    pass,
                    confirmPass
                });
            } else {
                // Show a helpful message telling dev to
                // pass an onSubmit prop
                setSubmitted(true);
            }
        }
    };

    return (
        <div className="SignIn">
            <h1 className="title has-text-centered is-spaced">
                {mode === "signup" && <>Get yourself an account</>}

                {mode === "signin" && <>Welcome back</>}

                {mode === "forgotpass" && <>Get a new password</>}

                {mode === "changepass" && <>Choose a new password</>}
            </h1>

            {submitted === true && (
                <p className="subtitle is-6 has-text-centered">
                    {mode === "signup" && (
                        <>
                            Signup successful. Rather than show this message, you're going to
                            want to pass a callback function into "Sign In" component and call
                            it so that your app can take an action, such as redirect to the
                            signed in view.
            </>
                    )}

                    {mode === "signin" && (
                        <>
                            Sign in successful. Rather than show this message, you're going to
                            want to pass a callback function into "Sign In" component and call
                            it so that your app can take an action, such as redirect to the
                            signed in view.
            </>
                    )}

                    {mode === "forgotpass" && (
                        <>
                            We've sent you a password reset email. Click the link in the email
                            to choose a new password.
              <ForgotPassDemoTip />
                        </>
                    )}

                    {mode === "changepass" && (
                        <>
                            Change of password successful. Rather than show this message,
                            you're going to want to pass a callback function into "Sign In"
                            component and call it so that your app can take an action, such as
                            redirect to the signed in view.
            </>
                    )}
                </p>
            )}

            {submitted === false && (
                <>
                    <form className="SignIn__form" onSubmit={handleSubmit}>
                        {(mode === "signup" ||
                            mode === "signin" ||
                            mode === "forgotpass") && (
                                <div className="field">
                                    <div className="control">
                                        <input
                                            className="input is-medium"
                                            type="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                    </div>

                                    {showErrors && getError("email") && (
                                        <p className="help is-danger">{getError("email").message}</p>
                                    )}
                                </div>
                            )}

                        {(mode === "signup" ||
                            mode === "signin" ||
                            mode === "changepass") && (
                                <div className="field">
                                    <div className="control">
                                        <input
                                            className="input is-medium"
                                            type="password"
                                            placeholder="Password"
                                            value={pass}
                                            onChange={e => setPass(e.target.value)}
                                        />
                                    </div>

                                    {showErrors && getError("pass") && (
                                        <p className="help is-danger">{getError("pass").message}</p>
                                    )}
                                </div>
                            )}

                        {(mode === "signup" || mode === "changepass") && (
                            <div className="field">
                                <div className="control">
                                    <input
                                        className="input is-medium"
                                        type="password"
                                        placeholder="Confirm Password"
                                        value={confirmPass}
                                        onChange={e => setConfirmPass(e.target.value)}
                                    />
                                </div>

                                {showErrors && getError("confirmPass") && (
                                    <p className="help is-danger">
                                        {getError("confirmPass").message}
                                    </p>
                                )}
                            </div>
                        )}

                        <div className="field">
                            <p className="control ">
                                <button className="button is-link is-fullwidth">
                                    {mode === "signup" && <>Sign up</>}

                                    {mode === "signin" && <>Sign in</>}

                                    {mode === "forgotpass" && <>Reset password</>}

                                    {mode === "changepass" && <>Change password</>}
                                </button>
                            </p>
                        </div>

                        {mode === "signin" && (
                            <Link className="has-text-centered is-block" to="/forgotpass">
                                Forgot password?
              </Link>
                        )}
                    </form>
                    <div className="SignIn__bottom-link has-text-centered">
                        {mode === "signup" && (
                            <>
                                Already have an account?
                <Link to="/signin">Sign in</Link>
                            </>
                        )}

                        {mode === "signin" && (
                            <>
                                Need an account?
                <Link to="/signup">Sign up</Link>
                            </>
                        )}

                        {mode === "forgotpass" && (
                            <Link to="/signin">Actually, I remember now.</Link>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

export default SignIn;