
import React from 'react';
//import 'react-native-gesture-handler';
//import { NavigationContainer } from '@react-navigation/native';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import Home from './home';
import Header from './header';

class App extends React.Component {
  render() {
    return (
      // <NavigationContainer>
        <View style={styles.appContainer}>
          <Header title="Transacoes" />
          <Home />
        </View>
      //</NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

AppRegistry.registerComponent('App', () => App);

export default App;
