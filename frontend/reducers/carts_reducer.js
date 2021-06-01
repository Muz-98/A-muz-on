import {
    RECEIVE_CART,
    RECEIVE_CART_ITEM,
    DELETE_PURCHASE,
    DELETE_PURCHASES
} from '../actions/cart_actions'

const defaultState = []

const cartReducer = (oldState = defaultState, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_CART_ITEM:
            newState[action.purchase.id] = action.purchase
            return newState;
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