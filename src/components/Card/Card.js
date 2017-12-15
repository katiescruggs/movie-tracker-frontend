import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'

const Card = ({movie}) => {
  const {title, poster_path, release_date, vote_average, overview} = movie;
  return (
    <div className='card'>
      <h3>{title}</h3>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
      <p>{release_date}</p>
      <p>{vote_average}</p>
      <p>{overview}</p>
    </div>
  );
};

export default Card;

Card.propTypes = {
  movie: PropTypes.object
};