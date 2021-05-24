import React from 'react'
import NavBar from '../nav_bar/nav_bar_container'
import { Link } from 'react-router-dom';

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

        if (Object.keys(this.props.cartProducts).length) {

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
                                            <Link to={`/products/${cartItem.id}`}>
                                                <div className="cart-item-title">{cartItem.name}</div>
                                            </Link>
                                            <div className="cart-item-in-stock">In Stock</div>
                                            <div className="cart-item-prime-logo">
                                                <img src={window.primeLogo} alt="logo" />
                                                <div className="cart-item-freereturns">
                                                    & FREE Returns
                                                </div>
                                            </div>
    
                                            <label className='gift'>
                                                <input type='checkbox' className='yes-gift' /><span className='gift-text'>This is a gift</span>
                                            </label>
                                            <div className='qty-delete-row'>
                                                {/* <select className='quantity-cart' value='Qty:'>
                                                        <option value='1'>Qty: 1</option>
                                                        <option value='2'>2</option>
                                                        <option value='3'>3</option>
                                                        <option value='4'>4</optio
                                                        <option value='5'>5</option>
                                                        <option value='6'>6</option>
                                                        <option value='7'>7</option>
                                                        <option value='8'>8</option>
                                                        <option value='9'>9</option>
                                                        <option value='10'>10</option>
                                                    </select> */}
                                                <button className='delete-cart-item' onClick={() => this.props.deleteFromCart(cartItem.id)}>Delete</button>
                                                {/* <button className='delete-cart-item'>Delete</button> */}
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

        else {
            return (
                <div>
                    <NavBar />
                    <div className="cart-title">Shopping Cart</div>
                    <div>Your cart is empty</div>

                </div>
            )
        }
    }
}

export default Cart;