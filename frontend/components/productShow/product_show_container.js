import { connect } from 'react-redux'
import { fetchProduct } from '../../actions/product_actions'
import { createPurchase } from '../../actions/cart_actions'
import ProductShow from './product_show'
import { withRouter } from 'react-router-dom'
import { fetchProducts } from '../../util/product_api_util'

const mSTP = (state, ownProps) => {

    return {
        product: state.entities.products[ownProps.match.params.productId],
        isLoggedIn: Boolean(state.session.id),
        cartProducts: Object.values(state.entities.cartProduct)
    }
}

const mDTP = dispatch => {
    return {
        fetchProduct: productId => dispatch(fetchProduct(productId)),
        // addToCart: cartProduct => dispatch(addToCart(cartProduct)),
        createPurchase: (purchase) => dispatch(createPurchase(purchase))
    }
}

export default withRouter(connect(mSTP, mDTP)(ProductShow))