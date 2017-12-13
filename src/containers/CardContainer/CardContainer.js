import React from 'react'
import { connect } from 'react-redux'
import './CardContainer.css'


export const CardContainer = () => {
  return (
    <div>
      Card Container
    </div>
    )
}

const mapStateToProps = state => {
  return {movies: state.movies}
}

export default connect(mapStateToProps, null)(CardContainer)