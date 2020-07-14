
import React from 'react';
import {
  AppRegistry
} from 'react-native';

import Home from './home';
import Header from './header';

class App extends React.Component {
  render() {
    return (
        <div>
          <Header title="Transacoes" />
          <Home />
        </div>
    );
  }
}


AppRegistry.registerComponent('App', () => App);

export default App;
