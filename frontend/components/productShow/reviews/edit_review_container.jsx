import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ReviewForm from "./review_form";
import { updateReview, fetchReviews } from "../../../actions/review_actions";

const mSTP = state => ({
    formType: "Edit Review",
    review: state.entities.reviews.display,

});

const mDTP = dispatch => ({
    action: (reviewForm) => dispatch(updateReview(reviewForm)),
    fetchReviews: (reviewId) => dispatch(fetchReviews(reviewId)),
});

const EditReviewForm = withRouter(connect(mSTP, mDTP)(ReviewForm));
export default EditReviewForm;