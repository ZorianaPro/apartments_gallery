import allActions from './index';


describe('ACTIONS', () => {
	test('should create an action with correct type', () => {
		const expectedAction = {
			type: 'GET_APARTMENTS'
		};
		expect(allActions.apartmentsActions.getApartments()).toEqual(expectedAction)
	});

	test('should create an action with correct type and payload', () => {
		const mockData = {
			"name": "Holidu Offer",
			"price": 12345,
			"rating": 5
		};
		const expectedAction = {
			type: 'REQUEST_APARTMENTS',
			payload: mockData
		};
		expect(allActions.apartmentsActions.requestApartments(mockData)).toEqual(expectedAction)
	})
});