import { connect } from 'react-redux'
import { logout } from '../../actions/session_actions'
import { signup } from '../../util/session_api_util'
import NavBar from './nav_bar'

const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout()),
        signup: (user) => dispatch(signup(user)),
        login: user => dispatch(login(user))
    }
}

export default connect(mSTP, mDTP)(NavBar);