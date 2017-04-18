import React, { Component } from 'react';
import $ from 'jquery';

class Search extends Component {

  handleSubmit(e) {
    e.preventDefault();
    var query = document.getElementById("search-query").value.trim().split(" ").join("+");
    var url = "http://www.omdbapi.com/?s=" + query;
    this.fetchMovies(url)
    
  }
  
  fetchMovies(url){
    $.ajax({
      url: url,
      method: "GET"
    }).done(response => {
      if (response.Response === "True") {
        this.props.updateMovies(response.Search)   
      } else {
        this.props.updateError();
      }
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