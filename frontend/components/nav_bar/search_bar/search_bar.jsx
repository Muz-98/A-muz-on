import React from 'react'
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { query: ''}

        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        // if (this.props.history)
        this.props.fetchSearchResults(this.state.query).then(() => {
            this.props.history.push(`/search`)
        })
    }

    handleInput(e) {
        e.preventDefault();
        this.setState({query: e.currentTarget.value})
    }

    render() {
        return (
            <form className="nav-bar-search" onSubmit={this.handleSubmit}>
                <input type='text' value={this.state.query} onChange={this.handleInput} className="nav-bar-search-input"></input>
                <img className="nav-bar-search-icon" src={window.searchIcon} />
            </form>
        )
    }
    // render() {
    //     return (
    //         <div></div>
    //     )
    // }
}

export default withRouter(SearchBar);