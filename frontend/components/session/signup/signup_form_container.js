import { connect } from 'react-redux'
import SignupForm from './sign_up_form'
import { signup } from '../../../actions/session_actions'

const mSTP = state => {
    return {
        errors: state.errors.session,
        formType: 'Creat account'
    }
}

const mDTP = dispatch => {
    return {
        processForm: user => dispatch(signup(user))
    }
}

export default connect(mSTP, mDTP)(SignupForm);