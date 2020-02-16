import React from 'react';
import {useSelector, useDispatch} from "../../react-redux-hooks";
import Offer from '../../components/Offer';
import allActions from "../../actions";
import './index.css'


const Results = () => {
	const {apartments, loading, error_msg} = useSelector(state => ({
		apartments: state.apartments.apartments || [],
		loading: state.apartments.loading,
		error_msg: state.apartments.error_msg
	})) || [];

	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(allActions.apartmentsActions.getApartments());
	}, []);

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

	return (
			apartments.map((offer) => {
				return (
						<Offer id={offer.id}
						       name={offer.details.name}
						       photos={offer.photos}
						       price={offer.price}
						       locationName={offer.location.name}
						/>
				)
			})
	)
};

export default Results;