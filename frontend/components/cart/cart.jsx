import React from 'react'
import NavBar from '../nav_bar/nav_bar_container'

class Cart extends React.Component {
    render() {
        console.log(this.props.cartProducts)
        return (
            <div>
                <NavBar />
                <div>
                    Hiyaaaa from Cart
                </div>
            </div>
        )
    }
}

export default Cart;