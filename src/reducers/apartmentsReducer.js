const INITIAL_STATE = {
	loading: false,
	apartments: [],
	error_msg: ''
};

const apartments = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'GET_APARTMENTS':
			return { ...state, loading: true};
		case 'REQUEST_APARTMENTS':
			return { ...state, apartments: action.payload, loading: false };
		case 'HAS_ERROR':
			return { ...state, error_msg: "Ooops....Something went wrong"};
		default:
			return state;
	}
};

export default apartments;