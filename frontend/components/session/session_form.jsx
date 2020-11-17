import React from 'react'

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };

        this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}> 
                    <h1>{this.props.formType}</h1>



                </form>

            </div>
        )
    }
}