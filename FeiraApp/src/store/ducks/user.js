
// ======== Action Types ===========
export const Types = {
	SET_CURRENT_USER: 'user/SET_CURRENT',
	CLEAR_CURRENT_USER: 'user/CLEAR_CURRENT'
};


// ======== Reducers ===========
const initialState = {
	currentUser: {
		displayName: '',
		username: '',
	}
};

export default function reducer(state = initialState, action) {
	console.log(action);
	switch (action.type) {
		case Types.SET_CURRENT_USER:
			return { ...state, currentUser: action.payload };

		case Types.CLEAR_CURRENT_USER:
			return initialState;

		default:
			return state;
	}
}

// ======== Actions Creators ===========
export function setCurrentUser(data) {
	return {
		type: Types.SET_CURRENT_USER,
		payload: data,
	};
}

export function clearCurrentUser(data) {
	return {
		type: Types.CLEAR_CURRENT_USER,
		payload: data,
	};
}
