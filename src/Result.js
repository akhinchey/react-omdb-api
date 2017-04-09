import React, { Component } from 'react';
import Movie from './Movie';

class Result extends Component {
  render() {
    return(
      <div id="result-section">
        <Movie />
        <Movie />
      </div>
      );
  }
}

export default Result;