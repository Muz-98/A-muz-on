import React from 'react'


class SplashProducts extends React.Component {
    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
       if (this.props.products[1] === undefined) return null 

       debugger 
        return (
            <div className="product-div">
                <div className="product-name">
                    <p>Lakers1111 Jersey 2020</p>
                    <p className="product-price">
                        <small>$</small>
                        <strong>19.99</strong>
                    </p>
                    <div className="product-rating">
                        <p>⭐</p>
                    </div>
    
                </div>
                <div className="product-image">
                    {/* <h6>{this.props.products[0].photos[0]}</h6> */}
                    <img src={this.props.products[7].photos[0].imageUrl} alt="H"/>
                  
                </div>
    
                <button>Add to Basket</button>
            </div>
        )

    }
}

export default SplashProducts;