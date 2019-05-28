import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';


class App extends Component {
  constructor (props) {
    super (props);

    //this is where the state will change in the lifetime if the application (search, gifs, selected gifs)
    this.state = {
      gifs: [],
      selectedGifId: "xZqycRHIQkKNa"

    }
    //this.search("homer thinking");

  }

  //to update click you need a function that will be passed to the children - as above

  search = (query) => {
    //API call
    giphy('lWEUFduKDHp9u499KhcWKyZGlmGpCMLN').search({
      q: query,
      rating: 'g'
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  render (){
    return (
      <div>
      <div className="left-scene">
        <SearchBar searchFunction={this.search} />
        <div className="selected-gif">
          <Gif id={this.state.selectedGifId}/>
        </div>
      </div>
      <div className="right-scene">
        <GifList  gifs ={this.state.gifs} />
      </div>

      </div>
      );
  }
}

export default App;
