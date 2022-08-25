import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';

// import {enableLatestRenderer} from 'react-native-maps';
// enableLatestRenderer();

const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView>
        <HomeScreen />

      </SafeAreaView>
    </>

  );
}

export default App;