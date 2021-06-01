import React from 'react'
import NavBar from '../nav_bar/nav_bar_container'
import { Link } from 'react-router-dom';

class Cart extends React.Component {

    constructor(props) {
        super(props)

        this.handleCheckout = this.handleCheckout.bind(this)
        this.handleDeleteItem = this.handleDeleteItem.bind(this)
    }
    
    componentDidMount() {
        this.props.fetchCart()
        // console.log(this.props.fetchCart())
    }

    handleCheckout(e) {
        e.preventDefault()

        this.props.deleteAllFromCart().then(() => 
           window.location.reload()
        )
    }

    handleDeleteItem(e) {
        e.preventDefault()
        this.props.deleteFromCart(this.props.cartProductId).then(() => 
            window.location.reload()
        )
    }

    componentDidUpdate(prevProps) {
        const prev = Object.values(prevProps.cartProducts);
        const current = Object.values(this.props.cartProducts);

        if (prev.length !== current.length) {
            this.props.fetchCart();
        }
    }

    render() {
        // if (curCart === undefined) return null 
        // console.log(this.props.cartProducts)
        // console.log(curCart)
        console.log(this.props.currentUser)
        
        if (!this.props.cartProducts) {
            return null
        }

        // let fullCart = []
        let fullCart = Object.values(this.props.cartProducts)
        
        let priceArr = []
        priceArr.push(this.props.cartProducts.price)
        let totalPrice = priceArr.reduce((a, b) => a + b, 0);
        // console.log(totalPrice)
         

        // if (Object.values(this.props.cartProducts).length > 4) {
        //     let arr = (Object.values(this.props.cartProducts))
        //     let names = []
        //     for (let i = 0; i < arr.length; i++) {
        //         if (!names.includes(arr[i].name)) {
        //             fullCart.push(arr[i])
        //         }
        //         names.push(arr[i].name)
        //     }
             
        // } else {

        //     fullCart.push(this.props.cartProducts)
        // }

        
        let totalCartItems = fullCart.length

        if (Object.keys(this.props.cartProducts).length) {
            
            return (
                <div>
                    <NavBar />
    
                    <div className="cart-container">
                        <div className="cart-title">Shopping Cart</div>

                        <div className="cart-main-cont">

                            <div className="cart-left">

                                <ul className="cart-items">
                                    {fullCart.map((cartItem) => {
                                        return (
                                            <div key={cartItem.id} className="cart-item">
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
                                                        <button className='delete-cart-item' onClick={this.handleDeleteItem}>Delete</button>
                                                        {/* <button className='delete-cart-item'>Delete</button> */}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    } )}
                                </ul>
                            </div>

                            <div className="cart-right">
                                <div className="subtotal-cont">
                                    <div className="subtotal-title">
                                        Subtotal ({totalCartItems} items): <span className="subtotal-price">${totalPrice} </span>
                                    </div>
                                    <label className='cart-right-gift'>
                                        <input type='checkbox' className='cart-right-input-gift' /><span className='cart-right-gift-text'>This order contains a gift</span>
                                    </label>
                                    <button onClick={this.handleCheckout} className="checkout-btn">Proceed to checkout
                                        <div className="checkout-msg">
                                            Thank you! Your order has been received.
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            )
        }

        else {
            return (
                <div>
                    <NavBar />

                    <div className="cart-noprod-cont">
                        <div className="cart-title">Shopping Cart</div>
                        <div className="cart-empty">Your cart is empty, try filling it with some products!</div>

                    </div>

                </div>
            )
        }
    }
}

export default Cart;