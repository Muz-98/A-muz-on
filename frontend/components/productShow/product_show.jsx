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
                                <h1>{this.props.product.name}</h1>
                            <div className="show-page-middle-ratings">
                                    <div>⭐</div>
                                    <div>1000 ratings</div>
                                </div>

                                <div className="show-page-middle-price">
                                    <div>Price</div>
                                    <div>{this.props.product.price}</div>
                                </div>
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
                            <div className="show-page-right-price">
                                {this.props.product.price}
                            </div>
                        </div>
                    </div>

                    <div className="show-page-bottom">

                    </div>


                </div>
            </div>
        )
    }
}

export default ProductShow