import * as SearchAPIUtil from '../util/seach_api_util'


export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS"

const receiveSearchResults = searchResults => ({
    type: RECEIVE_SEARCH_RESULTS,
    searchResults
})

export const fetchSearchResults = search => {
    return dispatch => {
        return SearchAPIUtil.fetchSearchResults(search).then(searchResults => {
            return dispatch(receiveSearchResults(searchResults))
        })
    }
}