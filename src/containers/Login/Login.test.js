import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Login from './Login';

describe('Login tests', () => {
  let login;
  beforeEach( () => {
    login = shallow(<Provider ><Login /></Provider>);
  });

  it('should exist', () => {
    expect(login).toBeDefined();
  });
  
  
});