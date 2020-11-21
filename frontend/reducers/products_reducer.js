import { RECEIVE_ALL_PRODUCTS, RECEIVE_PRODUCT} from '../actions/product_actions'

const ProductsReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = {}
    debugger 
    switch(action.type) {
        case RECEIVE_ALL_PRODUCTS:
            return action.products
        case RECEIVE_PRODUCT:
            newState = Object.assign({}, state, {[action.product.id]: action.product})
            debugger 
            return newState;
        default:
            return state;

    }
}

export default ProductsReducer;