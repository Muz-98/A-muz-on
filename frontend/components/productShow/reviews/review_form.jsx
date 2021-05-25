import React from 'react';
import Rating from 'react-rating'
// import '@fortawesome/fontawesome-free/js/all.js';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.review

        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.action(this.state)
    }

    updateReview(property) {
        return e => this.setState({ [property]: e })
    }

    update(field) {
        return e => {
            this.setState({[field]: e.target.value})
        }
    }

    render() {
        return (
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    <h1>{this.props.formType}</h1>
                    <Rating
                        initialRating={this.state.rating}
                        // emptySymbol="far fa-star"
                        // fullSymbol="fas fa-star"
                        onChange={this.updateReview('rating')}
                    />
                    <h3>Add a title</h3>
                    <input type="text" onChange={this.update('title')} value={this.state.title}/>
                    <h3>Review:</h3>
                    <textarea onChange={this.update('body')} value={this.state.body}></textarea>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default ReviewForm;