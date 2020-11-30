import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './search_bar/search_bar_container'

// const NavBar = (props) => {

//     const logged_in = () => (
//         <div>
//             <h2>Welcome, {props.currentUser.username}</h2>
//             <Link to="/login">Logout</Link>
//         </div>   
//     );

//     const logged_out = () => (
//         <>
//             <Link to="/signup">Sign Up!</Link>
//             <Link to="/login">Login!</Link>
//         </> 
//     );

//     return (props.currentUser) ? logged_in() : logged_out();
// }

// export default NavBar;

class NavBar extends React.Component {

    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault();
        this.props.logout(this.props.currentUser)
    }

    render() {
        const signinName = (this.props.currentUser) ? `${this.props.currentUser.username}` : 'Sign in'

        const logged_out_drop = () => (
            // <div className="nav-bar-right-option-1-dropdown">
            <>
                <Link to="/login">
                    <button className="dropdown-signin-btn">Sign in</button>
                </Link>

                <div className="dropdown-new-customer">
                    <p>New Customer?</p>
                    <Link to="/signup">Start here.</Link>

                </div>
            </>
            // </div>
        )

        const logged_in_drop = () => (
            <>
                <Link to="/login">
                    <button className="dropdown-signout-btn" onClick={this.handleClick}>Sign out</button>
                </Link> 
            </>
        )
        
        const displayName = (this.props.currentUser) ? this.props.currentUser.username : 'Guest'
        const dropdown = (this.props.currentUser) ? logged_in_drop() : logged_out_drop()

            return (
                <div className="nav-bar-div">
                    <div className="nav-bar-top">
                        <div className="nav-bar-menu">
                            <img className="nav-bar-menu-icon" src={window.navLeft} alt="menu icon"/>
                        </div>

                        <Link to="/">
                            <div className="nav-bar-logo">
                                <img src={window.amuzonWhite} alt="amuzon logo" />
                            </div>
                        </Link>

                        <div className="nav-bar-search">
                            <SearchBar/>
                        

                            {/* <input className="nav-bar-search-input" type="text"/>
                            <img className="nav-bar-search-icon" src={window.searchIcon} /> */}
                        </div>

                        <div className="nav-bar-right">
                            <div className="nav-bar-right-option">
                                <div className="nav-bar-right-option-1-container">
                                    <div className="nav-bar-right-option-1">
                                        <div className="nav-bar-right-11">
                                            Hello, {signinName}
                                        </div>
                                        <div className="nav-bar-right-12">
                                            Accounts & Lists
                                        </div>
                                    </div>
                                    <div className="nav-bar-right-option-1-dropdown">
                                        {/* <Link to="/login">
                                            <button className="dropdown-signin-btn">Sign in</button>
                                        </Link>
                                        <div className="dropdown-new-customer">
                                            <p>New Customer?</p>
                                            <Link to="/signup">Start here.</Link>

                                        </div> */}
                                        {dropdown}
                                    </div>
                                </div>
                            </div>
                            <div className="nav-bar-right-option">
                                <div className="nav-bar-right-21">
                                    Returns
                                </div>
                                <div className="nav-bar-right-22">
                                    & Orders
                                </div>
                            </div>
                            <div className="nav-bar-right-option">
                                <div className="nav-bar-right-31">
                                    Try
                                </div>
                                <div className="nav-bar-right-32">
                                    Prime
                                </div>
                            </div>
                            <Link to="/cart">
                                <div className="nav-bar-right-cart">
                                    <img className="nav-bar-right-cart-img" src={window.navCart} alt="cart"/> 
                                    <strong>Cart</strong>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="nav-bar-bottom">
                        <div className="deliver-container">
                            <img src={window.navbarLoc} />
                            &nbsp;
                            <div className="deliver-address">
                                <div className="deliver-address-top">
                                    Deliver to {displayName}
                                </div>

                                <div className="deliver-address-bottom">
                                    New York 12345
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    
}

export default NavBar;