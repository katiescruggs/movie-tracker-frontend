import React from 'react'
import { connect } from 'react-redux'
import Card from '../../components/Card/Card'
import './CardContainer.css'


export const CardContainer = (props) => {
  console.log(props)
  return (
    <div>
      <Card />
    </div>
    )
}

const mapStateToProps = state => {
  return {movies: state.movies}
}

export default connect(mapStateToProps, null)(CardContainer)