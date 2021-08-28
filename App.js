/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import MainScreen from './src/components/mainScreen';

const App= () => {
  return (
    <SafeAreaView >
      <MainScreen/>
    </SafeAreaView>
  );
};

export default App;
