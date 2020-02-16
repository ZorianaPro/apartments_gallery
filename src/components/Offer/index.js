import React from 'react';

const Offer = props => {
	const {id, name, details, price, photos, ration} = props;
	return (
		<div key={id}>
			<p>{name}</p>
		</div>
	)
};

export default Offer;