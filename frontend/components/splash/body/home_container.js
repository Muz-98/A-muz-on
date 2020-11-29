import { connect } from 'react-redux'
import { fetchProducts } from '../../../actions/product_actions'
import Body from './home'

const mSTP = state => {
    return {
        products: state.entities.products
    }
}

const mDTP = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(mSTP, mDTP)(Body)