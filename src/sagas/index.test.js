import { put, takeLatest } from 'redux-saga/effects';
import { fetchApi, catchError, getOffers, actionWatcher } from './index'

describe('SAGAS', () => {

	test('should dispatch action "GET_APARTMENTS" ', () => {
		const generator = actionWatcher();

		expect(generator.next().value).toEqual(takeLatest('GET_APARTMENTS', getOffers));
		expect(generator.next().done).toBeTruthy();
	});

	test('should dispatch action "REQUEST_APARTMENTS" with result from fetch Holidu API', () => {
		const mockData = {
			"name": "Holidu Offer",
			"price": 12345,
			"rating": 5
		};
		const generator = getOffers();
		generator.next();
		expect(generator.next(mockData).value).toEqual(put({type:"REQUEST_APARTMENTS", payload: mockData}));
		expect(generator.next().done).toBeTruthy();
	});

});
