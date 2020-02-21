import React from 'react';
import './index.css';

const Offer = props => {

	const id = props.id;
	const name = props.details && props.details.name;
	const photo = (props.photos && props.photos[0].m) ? props.photos[0].m : 'default-picture';
	const priceDaily = props.price && props.price.daily;
	const priceCurrency =  props.price && props.price.currency;
	const locationName = props.location && props.location.name;

	return (
		<div key={id} className="offer-item">
			<div className="image-container">
				<img src={photo} alt={name} className="offer-image" height="100%" width="100%"/>
			</div>
			<div className="offer-item-info">
				<div className="info-container">
					<div className="offer-title cut-title">{name}</div>
					<div>{locationName}</div>
				</div>
				<div className="price-container">
					<span>{priceDaily} {priceCurrency}/night</span>
				</div>
			</div>
		</div>
	)
};

export default Offer;