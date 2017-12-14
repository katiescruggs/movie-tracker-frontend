import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../../components/Card/Card';
import './CardContainer.css';
import Slider from '../../components/Slider/Slider';

export const CardContainer = ({movies}) => {
  const cards = movies.map((movie) => {
    return <Card
      key={movie.id}
      movie={movie} 
    />;
  });

  return (
    <div>
      <Slider />
      {cards}
    </div>
  );
};

const mapStateToProps = state => {
  return {movies: state.movies};
};

CardContainer.propTypes = {
  movies: PropTypes.array
};

export default connect(mapStateToProps, null)(CardContainer);