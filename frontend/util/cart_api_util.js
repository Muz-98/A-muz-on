export const fetchCart = () => {
    return $.ajax({
        method: "GET",
        url: "/api/cartsproducts"
    })
}

export const updateCart = () => {

}

export const addToCart = (cartsProduct) => {
    return $.ajax({
        method: 'POST',
        url: '/api/cartsproducts',
        data: {cartsProduct}
    })
}

export const deleteFromCart = (cartsProductId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/cartsproducts/${cartsProductId}`
    })
}