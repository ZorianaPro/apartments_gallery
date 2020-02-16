import { put, all, takeLatest, fork, call } from 'redux-saga/effects';
import allActions from '../actions';

export const fetchApi = async () => {
	try {
		const responce = await fetch(`https://api.holidu.com/rest/v6/search/offers?searchTerm=Mallorca,%20Spanien`);
		const jsonData = await responce.json();
		return jsonData.offers;
	} catch (e) {
		catchError(e)
	}
};

export function* catchError(e) {
	yield put(allActions.apartmentsActions.hasError(e))
}


export function* getOffers() {
	const apartments = yield call(fetchApi);
	yield put(allActions.apartmentsActions.requestApartments(apartments))
}

export function* actionWatcher() {
	yield takeLatest('GET_APARTMENTS', getOffers)
}

export default function* rootSaga() {
	yield all([actionWatcher()]);
}