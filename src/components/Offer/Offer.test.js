import React from 'react';
import Offers from '../Offer';
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
});

