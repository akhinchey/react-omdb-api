import React, { Component } from 'react';
import Search from './Search';
import Result from './Result';
import Error from './Error';

class Screen extends Component {

  constructor() {
    super();
    this.state = {
      movieList: [],
      movieError: "",
    };
  }

  updateMovies(movies) {
    this.setState({
      movieList: movies,
      movieError: "",
    })
  }

  updateError() {
    this.setState({
      movieList: [],
      movieError: "Movies not found."
    })
  }

  render() {
    return (
      <div id="main">
        <Search updateMovies={this.updateMovies.bind(this)} updateError={this.updateError.bind(this)} />
      <Error movieError={this.state.movieError}/>

        <Result movieList={this.state.movieList}/>
      </div>
      );
  }
}

export default Screen;