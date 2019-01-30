import React, { Component } from 'react';
import ChartList from '../components/ChartList.js';

class ChartContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      songs: []
    };
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener( "load" , () => {
      const jsonString = request.responseText;
      const songObjects = JSON.parse(jsonString);
      this.setState({songs: songObjects.feed.entry});
    });

    request.send();
    console.log("DID MOUNT");
  }

  render(){
    return <ChartList songs={this.state.songs}/>
  }


}

export default ChartContainer;
