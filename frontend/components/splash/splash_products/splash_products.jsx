import React from 'react'
import { withRouter } from 'react-router-dom';

class SplashProducts extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault()
        this.props.history.push(`/products/${this.props.product.id}`)
    }

    render() {

        return (
            <div className="product-div">
                <div className="product-info">
                    <div onClick={this.handleClick} className="product-title">
                        <p>{this.props.product.name}</p>
                        <p className="product-price">
                            <small>$</small>
                            <strong>{this.props.product.price}</strong>
                        </p>
                    </div>
                    <div className="product-rating">
                        <p>⭐</p>
                    </div>
    
                </div>
                <div className="product-image">
        
                    <img onClick={this.handleClick} src={this.props.product.photos[0].imageUrl} alt="Jersey Picture"/>
                  
                </div>
            </div>
        )

    }
}

export default withRouter(SplashProducts);