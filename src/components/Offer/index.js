import React from 'react';
import './index.css';

const currencyList = require('../../currencyList.json');

export const decodeHTML = str => {
	return str.replace(/&#(\d+);/g, (match, dec) => {
		return String.fromCharCode(dec);
	});
};

export const getCurrency = currency => {
	let symbol = '';
	currencyList.map(val => {
		if (val.abbreviation === currency) {
			symbol = val.symbol;
		}
	});
	return symbol;
};

const Offer = props => {

	const id = props.id;
	const offerLink = props.link ? `https://www.holidu.com${props.link}` : '/';
	const name = props.details && props.details.name;
	const photo = (props.photos && props.photos[0].m) ? props.photos[0].m : 'default-picture';
	const priceDaily = props.price && props.price.daily;
	const priceCurrency =  (props.price && props.price.currency) ? getCurrency(props.price.currency.toString()) : '';
	const locationName = props.location && props.location.name;
	const priceString = (props.price && props.price.daily && props.price.currency) ? `${decodeHTML(priceCurrency)}${priceDaily}/night` : '';

	return (
		<a href={offerLink} key={id} className="offer-item">
			<div className="image-container">
				<img src={photo} alt={name} className="offer-image" height="100%" width="100%"/>
			</div>
			<div className="offer-item-info">
				<div className="info-container">
					<div className="offer-title cut-title">{name}</div>
					<div>{locationName}</div>
				</div>
				<div className="price-container">
					<span>{priceString}</span>
				</div>
			</div>
			<div className="bottom-container">
				<a href="link" className="more-button">Book now</a>
			</div>
		</a>
	)
};

export default Offer;