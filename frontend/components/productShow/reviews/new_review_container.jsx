import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from '../../../actions/review_actions';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
    debugger 
    return {
        formType: "Create Review",
        review: {
            userId: state.session.id,
            title: "",
            body: " ",
            productId: ownProps.match.params.productId,
            rating: 1
        }

    }
}

const mDTP = dispatch => {
    return {
        action: (review, productId) => dispatch(createReview(review, productId))
    }
};

export default withRouter(connect(mSTP, mDTP)(ReviewForm));