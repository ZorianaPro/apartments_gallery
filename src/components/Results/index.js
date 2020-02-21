import React from 'react';
import {useSelector, useDispatch} from "../../react-redux-hooks";
import Offer from '../../components/Offer';
import allActions from "../../actions";
import './index.css'



const Results = (props) => {

	const apartments = props.apartments || [];
	const apartmentsLength = apartments.length;
	const loading = props.loading;
	const error_msg = props.error_msg;

		if (loading) {
			return (
				<div className="loading">
					Loading...
				</div>
			)
		}
		if (error_msg) {
			return (
				<div className="error">
					{error_msg}
				</div>
			)
		}
	if (apartmentsLength === 0 && !error_msg && !loading) {
		return (
			<div className="no-results">
				Nothing to show!
			</div>
		)
	}
		return (
			apartments.map((offer) => {
				return (
					<Offer id={offer.id}
					       details={offer.details}
					       photos={offer.photos}
					       price={offer.price}
					       location={offer.location}
					/>
				)
			})
		)
};

export default Results;