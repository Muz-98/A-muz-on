import { connect } from 'react-redux'
import SessionForm from './session_form'
import { signup } from '../../actions/session_actions'

const mSTP = state => {
    return {
        errors: state.errors.session,
        formType: 'Sign Up'
    }
}

const mDTP = dispatch => {
    return {
        processForm: user => dispatch(signup(user))
    }
}

export default connect(mSTP, mDTP)(SessionForm);