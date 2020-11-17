import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions'

const sessionReducer = (state = { id: null }, action) => {
    Object.freeze(state)

    let newState = {}

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            const { currentUser } = action;

            newState = Object.assign({}, { id: currentUser.id })

            return newState
        case LOGOUT_CURRENT_USER:
            newState = Object.assign({}, { id: null })

            return newState;
        default:
            return state;
    }
}

export default sessionReducer;