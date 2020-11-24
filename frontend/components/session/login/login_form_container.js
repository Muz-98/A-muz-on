import { connect } from 'react-redux'
import LoginForm from './login_form'
import { login, loginDemoUser } from '../../../actions/session_actions'

const mSTP = state => {
    return {
        errors: state.errors.session,
        formType: 'Sign In'
    }
}

const mDTP = dispatch => {
    return {
        processForm: user => dispatch(login(user)),
        loginDemoUser: () => dispatch(loginDemoUser())
    }
}

export default connect(mSTP, mDTP)(LoginForm);