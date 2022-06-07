/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import { StatusBar } from 'react-native';
import MainRoot from './src/routes/MainRoot'
import { Provider } from 'react-redux';

import store from './src/store';

const App: () => Node = () => {

  return (
    <Provider store={store}>
      <React.Fragment>
        <StatusBar barStyle={'light-content'} />
        <MainRoot />
      </React.Fragment>
    </Provider>
  );
};

export default App;
