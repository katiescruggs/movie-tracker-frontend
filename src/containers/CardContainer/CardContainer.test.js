import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import { CardContainer, mapStateToProps } from './CardContainer'

describe('CardContainer tests', () => {
  let renderedCardContainer;
  beforeEach( () => {
    renderedCardContainer = shallow(<Provider ><CardContainer /></Provider>)
  })
  
  it('should match the snapshot', () => {
    expect(renderedCardContainer).toMatchSnapshot()
  })

  it('should be defined', () => {
    expect(renderedCardContainer).toBeDefined()
  })

  describe('mapStateToProps', () => {
    it('should pull movies from the store', () => {
      const mockStore = {
        movies: [{title: 'Star Wars'}],
        favorites: [{title: 'Wonder Woman'}],
      }
      const result = mapStateToProps(mockStore)
      expect(result.movies).toEqual(mockStore.movies)
      expect(result.favorites).toEqual(mockStore.favorites)
    })


  })

})