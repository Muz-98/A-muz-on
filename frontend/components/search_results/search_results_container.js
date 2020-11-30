import { connect } from 'react-redux'
import SearchResults from './search_results'

const mSTP = state => {
    return {
        products: state.entities.search
    }
}

export default connect(mSTP, null)(SearchResults)