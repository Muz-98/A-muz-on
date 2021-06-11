import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UpdateReviewForm from "./edit_review_form";
import { updateReview, fetchReviews } from "../../../actions/review_actions";

const mSTP = state => ({
    formType: "Edit Review",
    review: state.entities.reviews.display,

});

const mDTP = dispatch => ({
    action: (reviewForm) => dispatch(updateReview(reviewForm)),
    fetchReviews: (reviewId) => dispatch(fetchReviews(reviewId)),
});

const EditReviewForm = withRouter(connect(mSTP, mDTP)(UpdateReviewForm));
export default EditReviewForm;