import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, render } from 'enzyme';

describe('App', () => {
  let app;

  beforeEach(() => {
    app = shallow(<App />);
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders without crashing', () => {
    shallow(<App />);
  });

  test('renders as expected', () => {
    expect(app).toMatchSnapshot();
  });
});

