import * as ProductAPIUtil from '../util/product_api_util'

export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS"
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT"

const receiveProduct = (product) => {
    debugger 
    return {
        type: RECEIVE_PRODUCT,
        product

    }
}

export const fetchProducts = () => {
    return dispatch => {
       return ProductAPIUtil.fetchProducts().then(products => dispatch({type: RECEIVE_ALL_PRODUCTS, products}))
    }
}

export const fetchProduct = (productId) => {
    debugger 
    return dispatch => {
       return ProductAPIUtil.fetchProduct(productId).then(product => {
           debugger
           return dispatch(receiveProduct(product))
       })
    }
}