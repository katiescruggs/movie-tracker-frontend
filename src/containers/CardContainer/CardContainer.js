import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './CardContainer.css';

export const CardContainer = ({movies, favorites, location}) => {
  const path = location.pathname;
  const displayArray = path === '/favorites' ? favorites : movies;
  
  const cards = displayArray.map((movie) => {
    return <Card
      key={`Card: ${movie.id}`}
      path={location.pathname}
      movie={movie} 
    />;
  });

  return (
    <div className='card-container'>
      {cards}
    </div>
  );
};

export const mapStateToProps = state => {
  return {
    movies: state.movies,
    favorites: state.favorites
  };
};

CardContainer.propTypes = {
  movies: PropTypes.array,
  favorites: PropTypes.array,
  location: PropTypes.object
};

export default connect(mapStateToProps, null)(CardContainer);