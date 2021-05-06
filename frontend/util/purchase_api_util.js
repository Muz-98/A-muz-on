export const fetchCart = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/purchases'
    })
};

export const createPurchase = (purchase) => {
    return $.ajax({
        method: 'POST',
        url: '/api/purchases',
        data: { purchase: purchase }
    })
};

export const updatePurchase = (purchase) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/purchases/${purchase.id}`,
        data: { purchase: purchase }
    })
};

export const destroyPurchase = (purchaseId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/purchases/${purchaseId}`
    })
};

export const destroyPurchases = () => {
    return $.ajax({
        method: 'DELETE',
        url: '/api/purchases/clear',
    })
};
