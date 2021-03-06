import { connect } from 'react-redux';
import { destroyReview, fetchReviews, updateReview } from '../../../actions/review_actions'
import ReviewIndex from './review_index'

const mSTP = (state, ownProps) => {

    return {
        reviews: Object.values(state.entities.reviews),
        users: state.entities.users,
        authorId: state.session.id,
        userId: Object.keys(state.entities.users),
        reviewId: Object.keys(state.entities.reviews)
    }
};

const mDTP = (dispatch) => {
    return {
        fetchReviews: (productId) => dispatch(fetchReviews(productId)),
        destroyReview: (reviewId) => dispatch(destroyReview(reviewId)),
        updateReview: (review) => dispatch(updateReview(review))
    }
};

export default connect(mSTP, mDTP)(ReviewIndex);