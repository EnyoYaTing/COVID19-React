import React, { Component } from 'react';

import Header from './components/Header';
import Home from './components/Home';
// import './App.css';

class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}
 
export default App;