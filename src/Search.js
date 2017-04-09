import React, { Component } from 'react';

class Search extends Component {
  render() {
    return(
      <div id="search-field">
      <form>
        <input type="text" />
        <input type="submit" />
      </form>
      </div>
      );
  }
}

export default Search;