import React, { Component } from 'react';

// define class search bar
class SearchBar extends Component {
  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value);
    //console.log(event.target.value);
  }

  render() {
    return (
      <input type="text" className="form-control form-search"
      onChange={this.handleUpdate}/>
      );
  }

}

export default SearchBar;
