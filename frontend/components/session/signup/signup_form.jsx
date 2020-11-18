import React from 'react'
import { Link } from 'react-router-dom'

class SignupForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
    }

    update(field) {
        return e => {
            this.setState({[field]: e.target.value})
        }
    } 

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    render() {
        return (
            <div className="signup-div">
                <img className="signup-logo" src={window.logoBlack} alt='amuzon logo'/>
                <form className="signup-form" onSubmit={this.handleSubmit}> 
                    <h1>{this.props.formType}</h1>
                <h5 className="signup-label-username">Your username</h5>
                    <input type="text" onChange={this.update('username')}/>
                <h5 className="signup-label-email">Email</h5>
                    <input type="text" onChange={this.update('email')}/>
                <h5 className="signup-label-password">Password</h5>
                    <input type="password" onChange={this.update('password')}/>

                <button className="create-account-btn">Create your A-Muz-On account</button>

                    <p className="TermsNCond">By creating an account, you agree to A-Muz-On's Conditions of Use and Privacy Notice.</p>
                    <div className="signup-form-footer">
                        <p className="signup-form-old-user">Already have an account?   </p>
                        <Link to="/login">Sign-In</Link>

                    </div>
                </form>
            </div>
        )
    }
}

export default SignupForm;