import React from 'react';
import { useDispatch, useSelector } from '../../react-redux-hooks';
import allActions from '../../actions'

const Button = () => {
	const dispatch = useDispatch();
	const getApartments = () => {
		dispatch(allActions.apartmentsActions.getApartments());
	};

	return (
		<button onClick={getApartments}>
			Get data!
		</button>
	)
};

export default Button;