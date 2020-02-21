const getApartments = () => {
	return {
		type: 'GET_APARTMENTS'
	}
};

const requestApartments = (data) => {
	return {
		type: 'REQUEST_APARTMENTS',
		payload: data || []
	}
};

const hasError = () => {
	return {
		type: 'HAS_ERROR',
	}
};

export default {
	getApartments,
	requestApartments,
	hasError
};