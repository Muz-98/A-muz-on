import {
    RECEIVE_CART,
    DELETE_PURCHASE,
    DELETE_PURCHASES
} from '../actions/cart_item_actions'

const cartReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_CART:
            return action.purchases;
        case DELETE_PURCHASE:
            delete newState[action.purchaseId];
            return newState;
        case DELETE_PURCHASES:
            delete newState[action.purchases];
            return newState;
        default:
            return oldState;
    }
}

export default cartReducer;