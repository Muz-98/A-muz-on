import React from 'react';
import Rating from 'react-rating';
import '@fortawesome/fontawesome-free/js/all.js';

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);


        this.handleUpdateReview = this.handleUpdateReview.bind(this)
    }

    componentDidMount() {
        this.props.fetchReviews(this.props.productId)
    }


    handleDeleteReview(reviewId) {
        // e.preventDefault();
        return () =>
            this.props.destroyReview(reviewId).then(() =>
                window.location.reload());
    }

    render() {
        const {reviews} = this.props
        const full = (
            <img className="rating-star" src={window.fullStar} />
        )

        const empty = (
            <img className="rating-star" src={window.emptyStar} />
        )

        const randInt = Math.floor(Math.random() * 22)
        // debugger
        return (
            <div className='r-container'>
                <h2 className="review-header">Top Reviews in the United States</h2>
                <ul className="review-ul">
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
                                            emptySymbol={empty}
                                            fullSymbol={full}
                                            readonly={true}
                                        />
                                    </div>

                                    <div className="review-title">
                                        {review.title}
                                    </div>
                                </div>
                                <div className="review-line2">
                                    Reviewed from the United States 
                                </div>

                                <div className="review-verified">
                                    Verified Purchase
                                </div>

                                <div className="review-body">
                                    {review.body}
                                </div>

                                <div className="review-helpful-text">
                                    {Math.floor(Math.random() * 22)} people found this helpful
                                </div>

                                <div className="review-bottom">
                                    <div className="review-helpful-button-cont">
                                        <button className="review-helpful">Helpful</button>

                                    </div>
                                    <div className="review-abuse">
                                        Report abuse

                                    </div>

                                    <div>
                                        <button >Delete</button>
                                    </div>

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