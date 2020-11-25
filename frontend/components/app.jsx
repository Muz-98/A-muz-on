import React from "react";
import SplashPage from './splash/splash'
import { Route, Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import SignupForm from "./session/signup/signup_form_container"
import LoginForm from './session/login/login_form_container'
import ProductShow from './productShow/product_show_container'
import SearchResults from './search_results/search_results'

const App = () => (
    <div>
        <header>
            {/* <h1>amazon!!</h1> */}
            <Switch>
                <Route exact path="/" component={SplashPage} />
                <AuthRoute path="/signup" component={SignupForm} />
                <AuthRoute path="/login" component={LoginForm} />
                <Route path="/products/:productId" component={ProductShow} />
                <Route path="/search" component={SearchResults} />
            </Switch>
        </header>
    </div>
);

export default App;