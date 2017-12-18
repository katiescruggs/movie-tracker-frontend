import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App tests', () => {
  let app;

  beforeEach( () => {
    app = shallow(<App />);
  });

  it('should be defined', () => {
    expect(app).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(app).toMatchSnapshot();
  });
});