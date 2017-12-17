import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import CardContainer from './CardContainer'

describe('CardContainer tests', () => {
  let CardContainer;
  beforeEach( () => {
    CardContainer = shallow(<Provider><CardContainer /></Provider>)
  })

  it('should be defined', () => {
    expect(CardContainer).toBeDefined()
  })

})