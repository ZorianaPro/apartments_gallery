import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow, render } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'

describe('App', () => {
  const initialState = {
    loading: false,
    apartments: [],
    error_msg: ''
  };
  const mockStore = configureStore();
  let app, store;

  beforeEach(() => {
    store = mockStore(initialState);
    app = shallow(<Provider store={store}><App /></Provider>);
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><App /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders without crashing', () => {
    shallow(<Provider store={store}><App /></Provider>);
  });

  test('renders as expected', () => {
    expect(app).toMatchSnapshot();
  });
});