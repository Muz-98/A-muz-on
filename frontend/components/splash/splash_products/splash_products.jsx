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

        // return (
        //     <div className="product-div">
        //         <div className="product-info">
        //             <div onClick={this.handleClick} className="product-title">
        //                 <p>{this.props.product.name}</p>
        //                 <p className="product-price">
        //                     <small>$</small>
        //                     <strong>{this.props.product.price}</strong>
        //                 </p>
        //             </div>
        //             <div className="product-rating">
        //                 <p>⭐</p>
        //             </div>
    
        //         </div>
        //         <div className="product-image">
        
        //             <img onClick={this.handleClick} src={this.props.product.photos[0].imageUrl} alt="Jersey Picture"/>
                  
        //         </div>
        //     </div>
        // )

            return (
                <div onClick={this.handleClick} className="search-results-product-container">
                    <div className="search-results-product-image">
                        <img src={this.props.product.photos[0].imageUrl} alt=""/>
                    </div>
                    <div className="search-results-product-info">
                        <div className="search-results-product-name">
                           {this.props.product.name}
                        </div>
                        <div className="search-results-product-rating">

                        </div>
                        <div className="search-results-product-price">
                            $<strong>{this.props.product.price}</strong>
                        </div>
                        <div className="search-results-product-footer">
                            <div className="search-results-product-footer-top">
                                <img src={window.primeLogo} alt="Logo"/>
                                &nbsp;
                                <div className="search-results-product-footer-2">
                                    Get it as soon as <strong>Tomorrow</strong>
                                </div>
                            </div>
                            <div className="search-results-product-footer-bot">
                                <div className="srpfb1">FREE Shipping on orders over $25</div>
                                <div className="srpfb2">shipped by A-muz-on</div>
                            </div>
                        </div>
                    </div>
                </div>
            
            )

    }
}

export default withRouter(SplashProducts);