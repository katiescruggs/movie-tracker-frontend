import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import './Card.css'

const Card = ({userId, addFav, removeFav, movie, favorites}) => {
  const favoriteClick = () => {
    const isFav = favorites.find(fav => (fav.title === movie.title));
    console.log('favClick: ', isFav)

    const movieId = isFav ? movie.movie_id : movie.id;

    isFav ? removeFav(userId, movieId) : addFav(userId, movie)
  };

  const {title, poster_path, release_date, vote_average, overview} = movie;

  return (
    <div className='card'>
      <h3>{title}</h3>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
      <p>{release_date}</p>
      <p>{vote_average}</p>
      <p>{overview}</p>
      <button onClick={favoriteClick}>
        Favorite
      </button>
    </div>
  );
};

Card.propTypes = {
  movie: PropTypes.object
};

const mapStateToProps = state => ({
  userId: state.user.info.id,
  favorites: state.favorites
});

const mapDispatchToProps = dispatch => {
  return {
    addFav: (userId, movie) => {
      dispatch(actions.addFavorite(userId, movie));
    },
    removeFav: (userId, favId) => {
      dispatch(actions.removeFavorite(userId, favId));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

