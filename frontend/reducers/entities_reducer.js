import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import ProductsReducer from './products_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    products: ProductsReducer
});

export default entitiesReducer;