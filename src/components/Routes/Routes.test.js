import React from 'react';
import { shallow } from 'enzyme';
import Routes from './Routes';

describe('Routes tests', () => {
  let routes;

  beforeEach(() => {
    routes = shallow(<Routes />);
  });

  it('should be defined', () => {
    expect(routes).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(routes).toMatchSnapshot();
  });
});