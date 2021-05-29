import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from '../../../actions/review_actions';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {

    return {
        formType: "Create Review",
        review: {
            user_id: state.session.id,
            title: "",
            body: " ",
            product_id: ownProps.location.productId,
            rating: 1
        },
        product: state.entities.products[ownProps.location.productId]

    }
}

const mDTP = dispatch => {
    return {
        action: (review, productId) => dispatch(createReview(review, productId))
    }
};

export default withRouter(connect(mSTP, mDTP)(ReviewForm));