import React from 'react'
import NavBar from '../nav_bar/nav_bar_container'

class Cart extends React.Component {

    constructor(props) {
        super(props)
    }
    
    // componentDidMount() {
    //     debugger
    //     this.props.fetchCart()
    //     console.log(this.props)
    // }

    render() {
        // if (curCart === undefined) return null 
        // console.log(this.props.cartProducts)
        // console.log(curCart)
        console.log(this.props.currentUser)
        
        if (!this.props.cartProducts) {
            return null
        }

        let fullCart = []
        
        fullCart.push(this.props.cartProducts)
        // debugger 
        return (
            <div>
                <NavBar />

                <div className="cart-container">
                    <div className="cart-title">Shopping Cart</div>
                    <ul className="cart-items">
                        {fullCart.map((cartItem) => {
                            return (
                                <div className="cart-item">
                                    <div className="cart-item-left">
                                        <img src={cartItem.photos[0].imageUrl} alt="product-photo" />
                                    </div>

                                    <div className="cart-item-right">
                                        <div className="cart-item-title">{cartItem.name}</div>
                                        <div className="cart-item-in-stock">In Stock</div>
                                        <div className="cart-item-prime-logo">
                                            <img src={window.primeLogo} alt="logo" />
                                        </div>
                                        <div className="cart-item-freereturns">
                                            & FREE Returns
                                        </div>
                                    </div>
                                </div>
                            )
                        } )}
                    </ul>
                   {/* {this.props.cartProducts.name} */}
                    
                </div>
            </div>
        )
    }
}

export default Cart;