import React, { Component } from 'react';

// define class search bar
class Gif extends Component {
  render() {
    const src = `https://media3.giphy.com/media/${this.props.id}/giphy.gif?cid=790b76115ceca2f47959512f5578695d&rid=giphy.gif`;
    return (
      <img src={src} alt="" className="gif"/>
      //add onClick function handle click and change the state in the app.jsx
      );
  }
}

export default Gif;
