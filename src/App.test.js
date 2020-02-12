import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let app;

  beforeEach(() => {
    app = shallow(<App />);
  });

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders as expected', () => {
    expect(app).toMatchSnapshot();
  });
});

