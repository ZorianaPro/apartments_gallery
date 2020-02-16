import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import Results from '../Results';
import { Provider } from 'react-redux';
import configureStore from "redux-mock-store";
import { shallow, configure, mount } from 'enzyme';
import jest from 'jest-mock';
import * as ReactReduxHooks from '../../react-redux-hooks';
import allActions from '../../actions';

describe('Results', () => {
	const INITIAL_STATE = {
		loading: false,
		apartments: [],
		error_msg: ''
	};
	let wrapper, store, useEffect;

	const mockStore = configureStore();

	const mockUseEffect = () => {
		useEffect.mockImplementationOnce(() => {
			ReactReduxHooks.useDispatch(allActions.apartmentsActions.getApartments)
		});
	};

	beforeEach(() => {
		store = mockStore(INITIAL_STATE);
		wrapper = mount(<Provider store={store}><Results /></Provider>);
		useEffect = jest.spyOn(React, "useEffect");
		mockUseEffect();
		mockUseEffect();
	});

	test('renders as expected', () => {
		expect(wrapper).toMatchSnapshot();
	});
});

