import React from 'react'
import { withRouter } from 'react-router-dom'
import NavBar from '../nav_bar/nav_bar_container'

class ProductShow extends React.Component {
    // constructor(props) {
    //     super(props)
    //     // this.state = this.props.product
    // }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId)
    }

    render() {
        if (this.props.product === undefined) return null
        
        return (
            <div>
                <NavBar />
                <div className="show-page-div">
                    <div className="show-page-top">

                        <div className="show-page-left">
                            <img src={window.kobePic} alt="Kobe Jersey"/>
                        </div>

                        <div className="show-page-middle">
                            <div className="show-page-middle-top">
                                <div>{this.props.product.name}</div>
                                <div className="show-page-middle-ratings">
                                        <div>⭐</div>
                                        &nbsp;
                                        &nbsp;
                                        <div>1000 ratings</div>
                                </div>

                                <div className="show-page-middle-price-container">
                                    <div>Price:</div>
                                    &nbsp;
                                    <div className="show-page-middle-price">{this.props.product.price}</div>
                                    &nbsp;
                                    <div className="show-page-middle-price-prime-logo">
                                        <img src={window.primeLogo} alt="logo"/>
                                    </div>
                                    &nbsp;
                                    <div className="show-page-middle-freereturns">
                                        & FREE Returns
                                    </div>
                                </div>
                                <hr/>
                            </div>

                            <div className="show-page-middle-bottom">
                                <div className="show-page-middle-description-title">
                                    About this item
                                </div>
                                <ul className="show-page-middle-description">
                                    <li>{this.props.product.description}</li>
                                </ul>
                            </div>
                        </div>

                        <div className="show-page-right">
                            <div className="show-page-right-inner">
                                <div className="show-page-right-container">
                                    <div className="show-page-right-price">
                                        ${this.props.product.price}
                                    </div>
                                    <div className="show-page-right-prime-and-ship">
                                        <div className="show-page-right-prime">
                                            <img src={window.primeLogo} alt=""/>
                                        </div>
                                        &nbsp;
                                        <div>& FREE Returns</div>

                                    </div>

                                    <div className="show-page-right-buttons">
                                        <div className="show-page-right-add-cart-btn">
                                            <button className='add-to-cart-btn'>Add to Cart</button>
                                        </div>
                                        <div className="show-page-right-buynow-btn">
                                            <button className="buy-now-btn">Buy Now</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <hr className="show-page-top-bottom-line"/>
                    <div className="show-page-bottom">

                    </div>


                </div>
            </div>
        )
    }
}

export default ProductShow