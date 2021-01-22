export const fetchCart = () => {
    return $.ajax({
        method: "GET",
        url: "/api/cartsproducts"
    })
}

export const updateCart = (cartsProduct) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/cartsproducts/${cartsProduct.id}`,
        data: { cartsProduct }
    })
}

export const addToCart = (cartsProduct) => {
    return $.ajax({
        method: 'POST',
        url: '/api/cartsproducts',
        data: { cartsProduct }
    })
}

export const deleteFromCart = (cartsProductId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/cartsproducts/${cartsProductId}`
    })
}