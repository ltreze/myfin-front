import React, { Component } from 'react';
import Home from './components/Home';
import Header from './header';

class App extends Component {
  render() {
    return (
        <div>
          <Header title="my-fin react" />
          <Home />
        </div>
    );
  }
}

export default App;
