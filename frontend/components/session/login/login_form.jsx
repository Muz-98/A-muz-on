import React from 'react'
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {
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
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
        (this.props.processForm(user)).then(() => {
            this.props.history.push("/")
        });
    }

    render() {
        return (
            <div className="login-div">
                {/* <img src='../../../../app/assets/images/AMUZON Logo.png'/> */}
                <Link to="/">
                    <img className="login-logo" src={window.logoBlack} alt='amuzon logo' />
                </Link>
                <div className="login-form-container">

                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <h1>{this.props.formType}</h1>
                        <h5 className="login-label-email">Email</h5>
                        <input type="text" onChange={this.update('email')} />
                        <h5 className="login-label-password">Password</h5>
                        <input type="password" onChange={this.update('password')} />

                        <button className="login-form-signin-btn">Sign in</button>
                    </form>
                        <div className="login-form-footer">
                            <p className="login-form-old-user"><span>New to A-Muz-On?</span></p>
                            <Link to="/signup">
                            <button className="login-form-signup-btn">Create your A-Muz-On account
                            </button>
                            </Link>

                        </div>
                </div>
            </div>
        )
    }
}


export default LoginForm;