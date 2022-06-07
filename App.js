/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import MainRoot from './src/routes/MainRoot'
import { Provider } from 'react-redux';

import store from './src/store';

const App: () => Node = () => {

  return (
    // <SafeAreaView style={backgroundStyle}>
    <Provider store={store}>
      <React.Fragment>
        <StatusBar barStyle={'light-content'} />
        <MainRoot />
      </React.Fragment>
    </Provider>
    // </SafeAreaView>
  );
};

export default App;
