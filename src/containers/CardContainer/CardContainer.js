import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../../components/Card/Card';
import './CardContainer.css';

export const CardContainer = ({movies, favorites, location}) => {
  const path = location.pathname;
  const displayArray = path === '/favorites' ? favorites : movies;
  
  const cards = displayArray.map((movie) => {
    return <Card
      key={movie.id}
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
  movies: PropTypes.array
};

export default connect(mapStateToProps, null)(CardContainer);