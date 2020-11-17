import React from "react";
import SplashPage from './splash/splash'
import { Route, Switch } from 'react-router-dom'

const App = () => (
    <div>
        <header>
            <h1>amazon!!</h1>
            <Route exact to="/" component={SplashPage} />
        </header>
    </div>
);

export default App;