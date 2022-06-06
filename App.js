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

const App: () => Node = () => {

  return (
    // <SafeAreaView style={backgroundStyle}>
    <React.Fragment>
      <StatusBar barStyle={'light-content'} />
      <MainRoot />
    </React.Fragment>
    // </SafeAreaView>
  );
};

export default App;
