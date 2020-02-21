import React, {useEffect} from 'react';
import Results from '../Results';
import { Provider } from 'react-redux';
import configureStore from "redux-mock-store";
import {  mount } from 'enzyme';

describe('Results', () => {
	const INITIAL_STATE = {
		loading: false,
		apartments: [],
		error_msg: ''
	};

	let wrapper, store, props, state;

	const mockStore = configureStore();


	beforeEach(() => {
		store = mockStore(INITIAL_STATE);
		state = store.getState();
		props = state;
		wrapper = mount(<Provider store={store}><Results {...props}/></Provider>);
	});

	test('renders as expected', () => {
		expect(wrapper).toMatchSnapshot();
	});

	describe('when fetching data from API', () => {

		beforeEach(() => {
			props = {...state, loading: true};
			wrapper = mount(<Provider store={store}><Results {...props}/></Provider>);
		});

		test('shows loading... on the page', () => {
			expect(wrapper.find('.loading').text()).toBe('Loading...');
		});

		test('renders as expected', () => {
			expect(wrapper).toMatchSnapshot();
		});
	});

	describe('when error occurred', () => {

		beforeEach(() => {
			props = {...state, error_msg: "Error"};
			wrapper = mount(<Provider store={store}><Results {...props}/></Provider>);
		});

		test('shows error message on the page', () => {
			expect(wrapper.find('.error').text()).toBe(props.error_msg);
		});

		test('renders as expected', () => {
			expect(wrapper).toMatchSnapshot();
		});
	});

	describe('when results are available', () => {

		beforeEach(() => {
			props = {...state, apartments: [
					{id: 123, details: {name: 'TEST'}, photos: [{m: 'qwer'}], price: 123, location: {name: 'Test'}},
					{id: 123, details: {name: 'TEST'}, photos: [{m: 'qwer'}], price: 123, location: {name: 'Test'}}
				]};
			wrapper = mount(<Provider store={store}><Results {...props}/></Provider>);
		});

		test('renders correct amount of offers', () => {
			expect(wrapper.find('Offer').length).toBe(props.apartments.length)
		});

		test('renders as expected', () => {
			expect(wrapper).toMatchSnapshot();
		});
	});

});