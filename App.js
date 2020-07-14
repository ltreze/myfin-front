import React from 'react';
import Home from './src/home';
import Header from './src/header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header title="myfin-react" />
        <Home />
      </div>
    );
  }
}
