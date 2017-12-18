import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Card from './Card';

describe('Card tests', () => {
  let card;
  
  beforeEach( () => {
    card = shallow(<Provider ><Card /></Provider>);
  });

  it('should exist', () => {
    expect(card).toBeDefined();
  });
});