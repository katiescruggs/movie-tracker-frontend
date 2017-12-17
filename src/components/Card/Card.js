import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import StarIcon from 'react-icons/lib/fa/star'
import './Card.css'

const Card = ({userId, addFav, removeFav, movie, favorites, path}) => {
  const isFav = favorites.find(fav => (fav.title === movie.title));
  
  const favoriteClick = () => {
    const movieId = path === '/favorites' ? movie.movie_id : movie.id;
    isFav ? removeFav(userId, movieId) : addFav(userId, movie);
  };

  const {title, poster_path, release_date, vote_average, overview} = movie;
  const buttonClass = isFav ? 'btn-card-favorite fav' : 'btn-card-favorite';

  return (
    <div>
    <div className="card">
      <div className='flipper'>
        <div className='front'>
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
        </div>
        <div className='back'>
          <header>
            <h3>{title}</h3>
          </header>
          <div className='card-body'>
            <p>{`Release Date: ${release_date}`}</p>
            <p>{`Vote Average: ${vote_average}`}</p>
            <p>{`Overview: ${overview}`}</p>
          </div>
        </div>
      </div>

    </div>
      <button 
        onClick={favoriteClick} 
        className={buttonClass}
        >
          FAVORITE 
          <StarIcon className='star-icon'/>
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

