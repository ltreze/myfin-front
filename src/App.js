import React from 'react';
import Home from './home';
import Header from './header';

class App extends React.Component {
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
