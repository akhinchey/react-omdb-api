import React from 'react';

function Movie(props) {
  return(
    <div className="movie">
    <div><img className="movie-poster" src={props.movie.Poster} /></div>
      <div>{props.movie.Title}</div>
        <div>Year: {props.movie.Year}</div>
        <div>Type: {props.movie.Type}</div>
    </div>
    ) 
}

export default Movie;