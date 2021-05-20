import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Cart from './cart'
import { fetchCart, updatePurchase, destroyPurchase, destroyPurchases} from '../../actions/cart_actions'

const mSTP = state => {
    return ({
        cartProducts: state.entities.cartProduct,
        currentUser: state.session.currentUser
    })
}

const mDTP = dispatch => {
    return {
        fetchCart: () => dispatch(fetchCart()),
        updateCart: purchase => dispatch(updatePurchase(purchase)),
        deleteFromCart: cartProductId => dispatch(destroyPurchase(cartProductId)),
        deleteAllFromCart: () => dispatch(destroyPurchases())
    }
}

export default withRouter(connect(mSTP, mDTP)(Cart))