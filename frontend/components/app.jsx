import React from "react";
import SplashPage from './splash/splash'
import { Route, Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import SignupForm from "./session/signup/signup_form_container"
import LoginForm from './session/login/login_form_container'
import ProductShow from './productShow/product_show_container'
import SearchResults from './search_results/search_results_container'
import NewReview from '../components/productShow/reviews/new_review_container'
import EditReview from '../components/productShow/reviews/edit_review_container'
import NavBar from './nav_bar/nav_bar_container'
import Footer from './footer/footer'
import Cart from './cart/cart_container'

const App = () => (
    <div className="outermost-div">
        {/* <NavBar/> */}
        <div className="main-content">
            {/* <h1>amazon!!</h1> */}
        <header>
            <Switch>
                <Route exact path="/" component={SplashPage} />
                <AuthRoute path="/signup" component={SignupForm} />
                <AuthRoute path="/login" component={LoginForm} />
                <Route path="/products/:productId" component={ProductShow} />
                <Route path="/search" component={SearchResults} />
                <Route path="/cart" component={Cart} />
                <Route path="/review/create-review" component={NewReview} />
                <Route path="/review/edit-review" component={EditReview} />
            </Switch>
            </header>
        </div>

        <Route path="/" component={Footer} />

        <footer className="footer">
            <div className="footer-top" onClick={() => window.scrollTo(0,0)}>
                Back to top
            </div>
            <div className="footer-bottom-container">
                <div className="footer-bottom-description">
                    <div className="footer-bottom-description-logo">
                        <a href="#">
                             <img src={window.logoWhite} alt="Amuzon Logo"/>
                        </a>
                    </div>
                    <div className="footer-words">
                        <div className="footer-bottom-description-top">
                            A-muz-on, is a clone of the popular online marketplace, Amazon
                        </div>
                        <div className="footer-bottom-description-bottom">
                            Created using React, Redux, Javascript, Ruby, and Rails
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-logos">
                    <a target="_blank" href="https://github.com/Muz-98">
                        <img className="footer-github" target="_blank" src={window.logoGithubW} alt="Github"/>
                    </a>

                    <a target="_blank" href="https://www.linkedin.com/in/muzammil-c"> 
                        <img className="footer-linkedin" target= "_blank" src={window.logoLinkedinW} alt="Linkedin"/>
                    </a>
                </div>
            </div>
        </footer>
    </div>
);

export default App;