import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import Header from './Header'

describe('Header tests', () => {
  let header;
  beforeEach( () => {
    header = shallow(<Provider ><Header /></Provider>)
  })

  it('should exist', () => {
    expect(header).toBeDefined()
  })
  
})