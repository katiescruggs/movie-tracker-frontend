import React from 'react';
import './Video.css';

const FilmReel = () => {
  return (
    <div className="film-reel-container">
      <iframe 
        //eslint-disable-next-line  max-len
        src="https://www.youtube.com/embed/9RTaIpVuTqE?rel=0&amp;autoplay=1&amp;controls=0&amp;showinfo=0" 
        frameBorder="0" 
        allowFullScreen>
      </iframe>
    </div>
  );
};

export default FilmReel;
