import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import ProductsReducer from './products_reducer'
import SearchReducer from './search_reducer'
import cartReducer from './carts_reducer'
import reviewsReducer from './review_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    products: ProductsReducer,
    search: SearchReducer,
    cartProduct: cartReducer,
    reviews: reviewsReducer
});

export default entitiesReducer;