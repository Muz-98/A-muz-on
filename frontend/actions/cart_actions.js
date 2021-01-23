import * as CartAPIUtil from '../util/cart_api_util'


export const RECEIVE_ALL_CARTPRODUCTS = "RECEIVE_ALL_CARTPRODUCTS"
export const RECEIVE_CARTPRODUCT = "RECEIVE_CARTPRODUCT"
export const REMOVE_CARTPRODUCT = "REMOVE_CARTPRODUCT"

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

const removeCartProduct = (cartProduct) => {
    return {
        type: REMOVE_CARTPRODUCT,
        cartProduct: cartProduct.id
    }
}

export const fetchCart = () => {
    return dispatch => {
        return CartAPIUtil.fetchCart().then((cart) => dispatch(receiveCart(cart)))
    }
}

export const addToCart = (cartProduct) => {
    return dispatch => {
        return CartAPIUtil.addToCart(cartProduct).then((cartProduct) => dispatch(receiveCartProduct(cartProduct)))
    }
}

export const updateCart = (cartProduct) => {
    return dispatch => {
        return CartAPIUtil.updateCart(cartProduct).then((cartProduct) => dispatch(receiveCartProduct(cartProduct)))
    }
}

export const deleteFromCart = (cartProductId) => {
    return dispatch => {
        return CartAPIUtil.deleteFromCart(cartProductId).then((cartProductId) => dispatch(removeCartProduct(cartProductId)))
    }
}