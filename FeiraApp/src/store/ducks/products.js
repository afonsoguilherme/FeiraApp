import { concat } from 'lodash';

// ======== Action Types ===========
export const Types = {
	ADD_PRODUCT: 'products/ADD'
};


// ======== Reducers ===========
const initialState = [];

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case Types.ADD_PRODUCT:
			return concat(state, action.payload);

		default:
			return state;
	}
}

// ======== Actions Creators ===========
export function registerProduct(data) {
	return {
		type: Types.ADD_PRODUCT,
		payload: data,
	};
}

