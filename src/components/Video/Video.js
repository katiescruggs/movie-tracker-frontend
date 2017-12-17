import React from 'react' 
import './Video.css'

const FilmReel = () => {
  return (
      <div className="film-reel-container">
      <iframe src="https://www.youtube.com/embed/UbzKuFnXxiU?rel=0&amp;autoplay=1&amp;controls=0&amp;showinfo=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen autoplay></iframe>
      </div>
  )
}

export default FilmReel;