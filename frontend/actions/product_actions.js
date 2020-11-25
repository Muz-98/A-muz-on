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

const receiveAllProducts = products => {
    return {
        type: RECEIVE_ALL_PRODUCTS,
        products
    }
}

export const fetchProducts = () => {
    return dispatch => {
       return ProductAPIUtil.fetchProducts().then(products => dispatch(receiveAllProducts(products)))
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