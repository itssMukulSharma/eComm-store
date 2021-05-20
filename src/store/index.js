import { createStore, combineReducers } from "redux"
import ProductsReducer from "./reducers/ProductsReducer"
import CartReducer from "./reducers/CartReducer"
import userReducer from './reducers/userSlice'
import { devToolsEnhancer } from 'redux-devtools-extension';
const root = combineReducers({
    ProductsReducer,
    CartReducer,
    user: userReducer
});
const store = createStore(root, devToolsEnhancer());
export default store;