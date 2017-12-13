import React from 'react'
import { connect } from 'react-redux'
import Card from '../../components/Card/Card'
import './CardContainer.css'


export const CardContainer = ({movies}) => {
  const cards = movies.map((movie) => {
    return <Card />
  })
  
  return (
    <div>
      {cards}
    </div>
    )
}

const mapStateToProps = state => {
  return {movies: state.movies}
}

export default connect(mapStateToProps, null)(CardContainer)