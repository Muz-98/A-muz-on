import { connect } from 'react-redux'
import { fetchSearchResults } from '../../../actions/search_actions'
import SearchBar from './search_bar'

const mSTP = state => {
    return {
        search: state.entities.search 
    }
}

const mDTP = dispatch => {
    return {
        fetchSearchResults: search => dispatch(fetchSearchResults(search))
    }
}

export default connect(mSTP, mDTP)(SearchBar)