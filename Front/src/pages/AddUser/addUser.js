import React from "react";
import UserService from "../../services/user.service";
import { withRouter } from "react-router-dom";

class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            type_id: "user",
            success: false,
            messageSucces: ""
        };
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state.email);
        console.log(this.state.password);
        console.log(this.state.name);
    }

    async  onSumbite(e) {
        e.preventDefault();
        this.setState({
            success: false,
        })
        let body = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            type_id: "5de0e78a1488fc302ca2d3c6"
        };
        let response = await UserService.create(body);
        if (response.ok) {
            this.setState({
                success: true,
                messageSucces: "authentication"
            });
            this.props.history.push('/Home');
        }

    }
    render() {
        return (
            <form className="form" style={{ display: this.props.display }} onSubmit={(e) => this.onSumbite(e)} style={{ display: this.props.display }}>
                <div className="input-container">
                    <label htmlFor="name" className="label">First Name</label>
                    <input type="text" name="name" id="name" placeholder="First name" className="input" onChange={(e) => this.handleChange(e)} />
                    <label htmlFor="type_id" className="label">Last Name</label>
                    <input type="text" name="type_id" id="type_id" placeholder="Last name" className="input" onChange={(e) => this.handleChange(e)} />
                    <label htmlFor="email" id="name" className="label">Email Address</label>
                    <input type="text" name="email" id="email" placeholder="Email Address" className="input" onChange={(e) => this.handleChange(e)} />
                    <label htmlFor="password" id="name" className="label">Password</label>
                    <input type="text" name="password" id="password" placeholder="Password" className="input" onChange={(e) => this.handleChange(e)} />
                </div>
                <button type="submit" id="login-btn">
                    SignUp
        </button>
            </form >
        );
    }
}

export default withRouter(AddUser);
