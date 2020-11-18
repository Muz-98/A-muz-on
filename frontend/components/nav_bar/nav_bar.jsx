import React from 'react'
// import { Link } from 'react-router-dom'

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
            <div className="nav-bar-logo">LOGO</div>

            <div className="nav-bar-search">
                <input className="nav-bar-search-input" type="text"/>
            </div>

            <div className="nav-bar-right">
                <div className="nav-bar-right-1">
                    <div className="nav-bar-right-11">
                        Hello Guest
                    </div>
                    <div className="nav-bar-right-12">
                        Sign In
                    </div>
                </div>
                <div className="nav-bar-right-2">
                    <div className="nav-bar-right-21">

                    </div>
                    <div className="nav-bar-right-22">

                    </div>
                </div>
                {/* <div className="nav-bar-right-3">
                    <div nav-bar-right-31>

                    </div>
                    <div nav-bar-right-32>

                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default NavBar;