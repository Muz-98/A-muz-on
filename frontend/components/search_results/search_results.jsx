import React from 'react'
import NavBar from '../nav_bar/nav_bar_container'
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'

class SearchResults extends React.Component {
    constructor(props) {
        super(props)
        // this.handleClick = this.handleClick.bind(this)
    }

    render() {

        const allResults = this.props.products.map(product => {
           
            return (
                <li className="search-results-product-container">

                    <Link  className ="search-link"onClick={() => { this.props.history.push(`/products/${product.id}`) }} >
                        <div className="search-results-product-image">
                            <img src={product.photos[0].imageUrl} alt=""/>
                        </div>
                        <div className="search-results-product-info">
                            <div className="search-results-product-name">
                            {product.name}
                            </div>
                            <div className="search-results-product-rating">

                            </div>
                            <div className="search-results-product-price">
                                $<strong>{product.price}</strong>
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
                    </Link>
                </li>
            
            )
        })

        let totalResults = this.props.products.length

        if (this.props.products.length) {
            return (
                <div className="search-results-div">
                    <NavBar />
                    <div className="search-results-container">
                        {/* <div className="search-results-left">
                            <div className="search-results-left-sidebar-container">
                                <div>
                                    Hello
                                </div>
                            </div>
                        </div> */}
                        <div className="search-results-right">
                            {/* <div>
                                Showing {totalResults} results
                            </div> */}
                            <ul className="search-ul">
                                {allResults}
                            </ul>
                        </div>
    
                        
                    </div>
                </div>
            )

        } else {

            return (
                <div>
                    <NavBar />

                    <div className="search-noprod-cont">
                        <div className="search-noprod-line1">
                            Your search did not match any products.
                        </div>

                        <div className="search-noprod-line2">
                            Please try again with different keywords
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default withRouter(SearchResults);