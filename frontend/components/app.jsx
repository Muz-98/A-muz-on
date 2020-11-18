import React from "react";
import SplashPage from './splash/splash'
import { Route, Switch } from 'react-router-dom'
import SignupForm from "./session/signup/signup_form_container";
import LoginForm from './session/login/login_form_container'

const App = () => (
    <div>
        <header>
            {/* <h1>amazon!!</h1> */}
            <Switch>
                <Route exact path="/" component={SplashPage} />
                <Route path="/signup" component={SignupForm} />
                <Route path="/login" component={LoginForm} />
            </Switch>
        </header>
    </div>
);

export default App;