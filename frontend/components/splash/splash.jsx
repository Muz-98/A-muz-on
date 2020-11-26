import React from 'react'
import NavBarContainer from '../nav_bar/nav_bar_container'
import Body from './body/body_container'


const SplashPage = props => {
    return (
        <div className="splash-div">
            {/* <h1>Splashhhh</h1> */}
            <NavBarContainer />
            <Body />
        </div>
    )
}

export default SplashPage;