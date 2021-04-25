import React from 'react'
import NavBar from '../nav_bar/nav_bar_container'

class Cart extends React.Component {

    componentDidMount() {
        // let curCart = this.props.fetchCart()
    }

    render() {
        // if (curCart === undefined) return null 
        console.log(this.props.cartProducts)
        console.log(this.props)
        // console.log(curCart)
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