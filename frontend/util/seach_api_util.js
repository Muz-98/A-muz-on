export const fetchSearchResults = search => {
    debugger 
    return $.ajax ({
        method: "GET",
        url: '/api/products/search',
        data: {search}
    })
}