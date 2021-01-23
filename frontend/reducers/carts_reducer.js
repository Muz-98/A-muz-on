import {RECEIVE_CARTPRODUCT, RECEIVE_ALL_CARTPRODUCTS, REMOVE_CARTPRODUCT} from '../actions/cart_actions'

const cartReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_ALL_CARTPRODUCTS:
            return action.cart;
        case RECEIVE_CARTPRODUCT:
            newState[action.cartProduct.id] = action.cartProduct 
            return newState
        case REMOVE_CARTPRODUCT:
            delete newState[action.cartProductId]
            return newState
        default:
            return state;
    }
}

export default cartReducer;