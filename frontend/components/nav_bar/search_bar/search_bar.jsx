import React from 'react'
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = { query: ''}

    //     this.handleInput = this.handleInput.bind(this)
    //     this.handleSubmit = this.handleSubmit.bind(this)
    // }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     // if (this.props.history)
    //     console.log(this.props)
    //     this.props.fetchSearchResults(this.state.query).then(() => {
    //         this.props.history.push(`/search?${query}`)
    //     })
    // }

    // handleInput(e) {
    //     e.preventDefault();
    //     this.setState({query: e.currentTarget.value})
    // }

    // render() {
    //     return (
    //         <form onSubmit={this.handleSubmit}>
    //             <input type='text' value={this.state.query} onChange={this.handleInput}></input>
    //             <button>Search</button>
    //         </form>
    //     )
    // }
    render() {
        return (
            <div></div>
        )
    }
}

export default withRouter(SearchBar);