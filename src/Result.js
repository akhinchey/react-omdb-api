import React, { Component } from 'react';
import Movie from './Movie';

class Result extends Component {

  render() {
    let movieList = this.props.movieList;
    return(
      <div id="result-section">
        {movieList.map( function(object, i) {
          return <Movie  movie={object} key={i} /> 
        })}
      </div>
      );
  }
}

export default Result;