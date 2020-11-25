import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import ProductsReducer from './products_reducer'
import SearchReducer from './search_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    products: ProductsReducer,
    search: SearchReducer
});

export default entitiesReducer;