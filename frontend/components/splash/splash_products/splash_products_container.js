import { connect } from 'react-redux'
import { fetchProducts } from '../../../actions/product_actions'
import SplashProducts from './splash_products'

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

export default connect(mSTP, mDTP)(SplashProducts)