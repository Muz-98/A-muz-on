export const fetchSearchResults = search => {
    return $.ajax ({
        method: "GET",
        url: '/api/products/search',
        data: {search}
    })
}