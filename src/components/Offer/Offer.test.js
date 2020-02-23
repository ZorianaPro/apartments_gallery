import React from 'react';
import Offers, { decodeHTML, getCurrency } from '../Offer';
import {  mount } from 'enzyme';

describe('Offers', () => {

	let wrapper, props;

	beforeEach(() => {
		props = {id: 123, details: {name: 'TEST'}, photos: [{m: 'qwer'}], price: 123, location: {name: 'Test'}};
		wrapper = mount(<Offers {...props}/>);
	});

	test('renders as expected', () => {
		expect(wrapper).toMatchSnapshot();
	});

	describe('no photos', () => {

		let wrapper, props;

		beforeEach(() => {
			props = {id: 123, details: {name: 'TEST'}, photos: [{}], price: 123, location: {name: 'Test'}};
			wrapper = mount(<Offers {...props}/>);
		});

		test('renders default picture', () => {
			expect(wrapper.find('img').prop('src')).toBe('default-picture');
		});

	});

	describe('when currency', () => {

		let wrapper, props, priceString;

		beforeEach(() => {
			props = {id: 123, details: {name: 'TEST'}, photos: [{}], price: {daily: 123, currency: 'dfg'}, location: {name: 'Test'}};
			priceString =  `<span>${decodeHTML(getCurrency(props.price.currency))}${props.price.daily}/night</span>`;
			wrapper = mount(<Offers {...props}/>);
		});

		test('displays correct currency symbol', () => {
			expect(wrapper.find('.price-container span').html()).toBe(priceString);
		});

	});
});

