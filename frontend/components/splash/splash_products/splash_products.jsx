import React from 'react'


class SplashProducts extends React.Component {
 

    render() {

        return (
            <div className="product-div">
                <div className="product-name">
                    <p>{this.props.product.name}</p>
                    <p className="product-price">
                        <small>$</small>
                        <strong>{this.props.product.price}</strong>
                    </p>
                    <div className="product-rating">
                        <p>⭐</p>
                    </div>
    
                </div>
                <div className="product-image">
        
                    <img src={this.props.product.photos[0].imageUrl} alt="H"/>
                  
                </div>
    
                <button>Add to Basket</button>
            </div>
        )

    }
}

export default SplashProducts;