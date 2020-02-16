import React from 'react';
import './index.css';

const Offer = props => {
	const {id, name, photos, price, locationName} = props;
	return (
		<div key={id} className="offer-item">
			<div className="image-container">
				<img src={photos[0].m} alt={name} className="offer-image" height="100%" width="100%"/>
			</div>
			<div className="offer-item-info">
				<div className="info-container">
					<div className="offer-title cut-title">{name}</div>
					<div>{locationName}</div>
				</div>
				<div className="price-container">
					<span>{price.daily} {price.currency}/night</span>
				</div>
			</div>
		</div>
	)
};

export default Offer;