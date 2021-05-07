import * as CartAPIUtil from '../util/purchase_api_util'


export const RECEIVE_CART = "RECEIVE_CART";
export const RECEIVE_PURCHASE = "RECEIVE_PURCHASE";
export const DELETE_PURCHASE = "DELETE_PURCHASE";
export const RECEIVE_PURCHASE_ERRORS = "RECEIVE_PURCHASE_ERRORS";
export const DELETE_PURCHASES = "DELETE_PURCHASES";

const receiveCart = (purchases) => ({
    type: RECEIVE_CART,
    purchases
});

const receivePurchase = (purchase) => ({
    type: RECEIVE_PURCHASE,
    purchase
});

const deletePurchase = (purchaseId) => ({
    type: DELETE_PURCHASE,
    purchaseId
});

const deletePurchases = (purchases) => ({
    type: DELETE_PURCHASES,
    purchases
});

const receivePurchaseErrors = errors => ({
    type: RECEIVE_PURCHASE_ERRORS,
    errors
});



export const fetchCart = () => dispatch => {
    return CartAPIUtil.fetchCart().then(purchases => (
        dispatch(receiveCart(purchases))
    ))
};

export const fetchPurchase = (purchaseId) => dispatch => {
    return CartAPIUtil.fetchPurchase(purchaseId).then(purchase => (
        dispatch(receivePurchase(purchase))
    ))
};

export const createPurchase = (purchase) => dispatch => {
    return CartAPIUtil.createPurchase(purchase).then(purchase => (
        dispatch(receivePurchase(purchase))
    ))
};

export const updatePurchase = (purchase) => dispatch => {
    return CartAPIUtil.updatePurchase(purchase).then(purchase => (
        dispatch(receivePurchase(purchase))
    ))
};

export const destroyPurchase = (purchaseId) => dispatch => {
    return CartAPIUtil.destroyPurchase(purchaseId).then(purchaseId => (
        dispatch(deletePurchase(purchaseId))
    ))
};

export const destroyPurchases = () => dispatch => {
    return CartAPIUtil.destroyPurchases().then(purchases => (
        dispatch(deletePurchases(purchases))
    ))
};