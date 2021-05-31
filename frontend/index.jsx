import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { login, signup, logout } from './actions/session_actions'
import {createReview, updateReview,destroyReview} from './actions/review_actions'
import {createPurchase, destroyPurchase, destroyPurchases} from './actions/cart_actions'
// import { signup, login, logout } from './util/session_api_util'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    ReactDOM.render(<Root store={store} />, root);
    window.destroyPurchase = destroyPurchase;
    window.destroyPurchases = destroyPurchases;
    window.createPurchase = createPurchase;
    window.updateReview = updateReview;
    window.destroyReview = destroyReview;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // window.login = login;
    // window.signup = signup;
    // window.logout = logout;
});