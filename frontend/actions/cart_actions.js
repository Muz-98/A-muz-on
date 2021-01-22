import * as CartAPIUtil from '../util/cart_api_util'


export const RECEIVE_ALL_CARTPRODUCTS = "RECEIVE_ALL_CARTPRODUCTS"
export const RECEIVE_CARTPRODUCT = "RECEIVE_CARTPRODUCT"


const receiveCart = (cart) => {
    return {
        type: RECEIVE_ALL_CARTPRODUCTS,
        cart
    }
}

const receiveCartProduct = (cartProduct) => {
    return {
        type: RECEIVE_CARTPRODUCT,
        cartProduct
    }
}

export const fetchCart = () => {
    return dispatch => {
        return CartAPIUtil.fetchCart().then((cart) => dispatch(receiveCart(cart)))
    }
}