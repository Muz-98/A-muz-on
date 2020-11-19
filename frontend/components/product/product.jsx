import React from 'react'


const Product = () => {
    return (
        <div className="product-div">
            <div className="product-name">
                <p>Lakers Jersey 2020</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product-rating">
                    <p>⭐</p>
                </div>

            </div>
            <div className="product-image">
                <h6>1</h6>
                <h6>1</h6>
                <h6>1</h6>
                <h6>1</h6>
                <h6>1</h6>
            </div>

            <button>Add to Basket</button>
        </div>
    )
}

export default Product;