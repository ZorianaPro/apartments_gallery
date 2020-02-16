import apartments from "./apartmentsReducer";

describe('REDUCER', () => {
	const INITIAL_STATE = {
		loading: false,
		apartments: [],
		error_msg: ''
	};

	test('should return the initial state', () => {
		expect(apartments(undefined, INITIAL_STATE)).toEqual(INITIAL_STATE);
	});

	test('should handle "GET_APARTMENTS" action', () => {
		expect(apartments(INITIAL_STATE, { type: 'GET_APARTMENTS' })).
		toEqual({...INITIAL_STATE, loading: true })
	});

	test('should handle "REQUEST_APARTMENTS" action', () => {
		const mockData = {
			"name": "Holidu Offer",
			"price": 12345,
			"rating": 5
		};

		expect(apartments(INITIAL_STATE, { type: "REQUEST_APARTMENTS", payload: mockData }))
		.toEqual({...INITIAL_STATE, apartments: mockData, loading: false })
	});
});