import React, { Component } from 'react';
import $ from 'jquery';

class Search extends Component {

  handleSubmit(e) {
    e.preventDefault();
    var query = document.getElementById("search-query").value.split(" ").join("+");
    var url = "http://www.omdbapi.com/?s=" + query;
    this.fetchMovies(url)
    
  }
  
  fetchMovies(url){
    $.ajax({
      url: url,
      method: "GET"
    }).done(response => {
      this.props.updateMovies(response.Search)
    });
  }

  render() {
    return(
      <div id="search-field">
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" id="search-query" / >
        <input type="submit" />
      </form>
      </div>
      );
  }
}

export default Search;