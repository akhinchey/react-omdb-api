import React, { Component } from 'react';
import Search from './Search';
import Result from './Result'

class Screen extends Component {
  render() {
    return (
      <div id="main">
        <Search />
        <Result />
      </div>
      );
  }
}

export default Screen;