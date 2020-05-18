import { concat } from 'lodash';

// ======== Action Types ===========
export const Types = {
	ADD_PRODUCT_CART: 'shoppingCart/ADD',
	CLEAR_CART: 'shoppingCart/CLEAR'
};


// ======== Reducers ===========
const initialState = {
	listOfProducts: []
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case Types.ADD_PRODUCT_CART:
			return { ...state, listOfProducts: concat(state.listOfProducts, action.payload) };

		case Types.CLEAR_CART:
			return initialState;

		default:
			return state;
	}
}

// ======== Actions Creators ===========
export function addProductInCart(data) {
	return {
		type: Types.ADD_PRODUCT_CART,
		payload: data,
	};
}

export function clearCart(data) {
	return {
		type: Types.CLEAR_CART,
		payload: data,
	};
}
