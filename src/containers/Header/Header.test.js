import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { Header, mapStateToProps } from './Header';

describe('Header tests', () => {
  let header;
  beforeEach( () => {
    header = shallow(<Provider ><Header /></Provider>);
  });

  it('should exist', () => {
    expect(header).toBeDefined();
  });

  describe('mapStateToProps', () => {
    it('should pull user info from the store', () => {
      const mockStore = {
        name: 'Yung Jhun',
        signedIn: false
      };
      const result = mapStateToProps(mockStore);
      expect(result.name).toEqual(mockStore.name);
      expect(result.signedIn).toEqual(mockStore.signedIn);
    });
  });

  describe('mapDispatchToProps', () => {
    
  });
});