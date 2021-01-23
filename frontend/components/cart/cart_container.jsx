
import { connect } from 'react-redux';
import Cart from './cart'
import { fetchCart, addToCart, updateCart, deleteFromCart} from '../../actions/cart_actions'

const mSTP = state => {
    return ({
        cartProducts: state.entities.cartProduct,
        currentUser: state.session.id
    })
}

const mDTP = dispatch => {
    return ({
        fetchCart: () => dispatch(fetchCart()),
        addToCart: cartProduct => dispatch(addToCart(cartProduct)),
        updateCart: cartProduct => dispatch(updateCart(cartProduct)),
        deleteFromCart: cartProductId => dispatch(deleteFromCart(cartProductId))
    })
}

export default connect(mSTP, mDTP)(Cart)