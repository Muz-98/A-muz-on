import React from 'react'
import { Link } from 'react-router-dom'

// const NavBar = (props) => {

//     const logged_in = () => (
//         <div>
//             <h2>Welcome, {props.currentUser.username}</h2>
//             <Link to="/">Logout</Link>
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
    }


    render() {
            return (
                <div className="nav-bar-div">
                    <div className="nav-bar-top">
                        <div className="nav-bar-menu">
                            <img className="nav-bar-menu-icon" src={window.navLeft} alt="menu icon"/>
                        </div>

                        <Link to="/">
                            <div className="nav-bar-logo">
                                <img src={window.logoWhite} alt="amuzon logo" />
                            </div>
                        </Link>

                        <div className="nav-bar-search">
                            <input className="nav-bar-search-input" type="text"/>
                            <img className="nav-bar-search-icon" src={window.searchIcon} />
                        </div>

                        <div className="nav-bar-right">
                            <div className="nav-bar-right-option">
                                <div className="nav-bar-right-option-1">
                                    <div className="nav-bar-right-11">
                                        Hello, Sign in
                                    </div>
                                    <div className="nav-bar-right-12">
                                        Accounts & Lists
                                    </div>
                                </div>
                                <div className="nav-bar-right-option-1-dropdown">
                                    <Link to="/login">
                                        <button className="dropdown-signin-btn">Sign in</button>
                                    </Link>
                                    <div className="dropdown-new-customer">
                                        <p>New Customer?</p>
                                        <Link to="/signup">Start here.</Link>

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
                        </div>
                    </div>

                    <div className="nav-bar-bottom">


                    </div>
                </div>
            )
        }
    
}

export default NavBar;