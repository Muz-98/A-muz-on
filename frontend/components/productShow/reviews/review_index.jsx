import React from 'react';
import Rating from 'react-rating';
import '@fortawesome/fontawesome-free/js/all.js';

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     authorId: this.props.authorId,
        //     reviewId: this.props.reviewId,
        //     hideUpdate: false,
        //     body: "",
        //     rating: 1
        // }
        // // console.log("state", this.state)

        // this.handleDeleteReview = this.handleDeleteReview.bind(this)
        // this.toggleUpdate = this.toggleUpdate.bind(this)
        // this.handleUpdateReview = this.handleUpdateReview.bind(this)
        // this.updateReview = this.updateReview.bind(this)
        // this.updateRating = this.updateRating.bind(this)
    }

    componentDidMount() {
        this.props.fetchReviews(this.props.productId)
    }

    render() {
        const {reviews} = this.props
        // debugger
        return (
            <div className='r-container'>
                <h2>Top Reviews in the United States</h2>
                <ul>
                    {reviews.map(review => {
                        return (
                            <div className="review-item">
                                <div className="review-user">

                                    <div className="review-username">
                                        {review.userName}
                                    </div>
                                </div>
                                
                                <div className="review-top">
                                    <div className="review-rating">
                                        <Rating
                                        className="ratingz"
                                            initialRating={review.rating}
                                            readonly={true}
                                        />
                                    </div>

                                    <div className="review-title">
                                        {review.title}
                                    </div>
                                </div>
                                <div>
                                    Reviewed from the United States 
                                </div>

                                <div className="review-body">
                                    {review.body}
                                </div>
                            </div>
                        )
                    })}
                </ul>

            </div>
        )
    }
}

export default ReviewIndex;