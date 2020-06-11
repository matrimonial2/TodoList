import counterReducer from './Counter.js';
import UserReducer from './User.js';
import ProductReducer from './Product.js';
import { combineReducers } from 'redux';

const AllReducers = combineReducers({
    counterReducer,
    UserReducer,
    ProductReducer
});

export default AllReducers;
