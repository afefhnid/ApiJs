import React from "react";
import CompanyService from "../../services/company.service";
import { withRouter } from "react-router-dom";

class AddCompany extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            destination: "",
            birthdayCompany: "",
            description: "",
            image: "",
            success: false,
            messageSucces: ""
        };
    }
    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });


    }

    async  onSumbite(e) {
        e.preventDefault();
        console.log(this.state.description);
        this.setState({
            success: false,
        })
        let body = {
            name: this.state.name,
            destination: this.state.destination,
            birthdayCompany: this.state.birthdayCompany,
            image: this.state.image,
            description: this.state.description,
        };
        console.log("body");
        let response = await CompanyService.create(body);
        if (response.ok) {
            this.setState({
                success: true,
                messageSucces: "authentication"
            });
            this.props.history.push('/Home');
        }
        console.log(response);

    }
    render() {
        return (
            <form className="form" style={{ display: this.props.display }} onSubmit={(e) => this.onSumbite(e)} style={{ display: this.props.display }}>
                <div className="input-container">
                    <label htmlFor="name" className="label">Name</label>
                    <input type="text" name="name" id="name" placeholder="Name" className="input" onChange={(e) => this.handleChange(e)} />
                    <label htmlFor="type_id" className="label">Destination</label>
                    <input type="text" name="destination" id="destination" placeholder="Destination" className="input" onChange={(e) => this.handleChange(e)} />
                    <label htmlFor="email" id="name" className="label">BirthdayCompany</label>
                    <input type="text" name="birthdayCompany" id="birthdayCompany" placeholder="BirthdayCompany" className="input" onChange={(e) => this.handleChange(e)} />
                    <label htmlFor="password" className="label">Image</label>
                    <input type="text" name="image" id="image" placeholder="Image" className="input" onChange={(e) => this.handleChange(e)} />
                    <label htmlFor="password" className="label">Description</label>
                    <input type="text" name="description" id="description" placeholder="Description" className="input" onChange={(e) => this.handleChange(e)} />
                </div>

                <button type="submit" id="login-btn">
                    SignUp
        </button>
            </form >
        );
    }
}

export default withRouter(AddCompany);
