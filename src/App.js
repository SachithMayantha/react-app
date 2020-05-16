import React, { Component } from 'react';
import MainComponents from './components/MainComponents'

class App extends Component {
  //can use one tag only. we use div tag
  render() {
    return (
      <div className="App"> 
        <MainComponents/>
      </div>
    );
  }
}

export default App;