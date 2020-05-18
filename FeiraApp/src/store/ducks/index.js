import { combineReducers } from 'redux';

import shoppingCart from './shoppingCart';
import products from './products';
import user from './user'

const reducers = combineReducers({
	shoppingCart,
	products,
	user,
});

export default reducers;
