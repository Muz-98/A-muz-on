import React from 'react'
import NavBar from '../nav_bar/nav_bar_container'

class Cart extends React.Component {

    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        debugger
        // this.props.fetchCart()
        console.log(this.props)
    }

    render() {
        // if (curCart === undefined) return null 
        // console.log(this.props.cartProducts)
        // console.log(curCart)
        console.log(this.props.currentUser)
        debugger 

        return (
            <div>
                <NavBar />
                <div>
                   {this.props.cartProducts.name}
                    
                </div>
            </div>
        )
    }
}

export default Cart;