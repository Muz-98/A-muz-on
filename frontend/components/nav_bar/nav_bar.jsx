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

const NavBar = () => {
    return (
        <div className="nav-bar-div">
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
                    <div className="nav-bar-right-11">
                        Hello Guest
                    </div>
                    <div className="nav-bar-right-12">
                        Sign In
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
                        Your
                    </div>
                    <div className="nav-bar-right-32">
                        Prime
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;