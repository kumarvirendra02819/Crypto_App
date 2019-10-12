import React from 'react';
import HomeScreen from './src/screens/HomeScreen'

import configureStore from './store';
import { Provider } from 'react-redux';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore}>
        <HomeScreen />
      </Provider>
    );
  }
}

