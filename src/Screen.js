import React, { Component } from 'react';
import Search from './Search';
import Result from './Result'

class Screen extends Component {

  constructor() {
    super();
    this.state = {
      movieList: [],
    };
  }

  updateMovies(movies) {
    this.setState({
      movieList: movies
    })
    // console.log(this.state.movieList);
  }

  render() {
    return (
      <div id="main">
        <Search updateMovies={this.updateMovies.bind(this)} />
        <Result movieList={this.state.movieList}/>
      </div>
      );
  }
}

export default Screen;