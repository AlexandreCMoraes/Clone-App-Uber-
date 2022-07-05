import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Feito download dos icones -> add Lista de todas as fontes disponíveis para copiar e colar no Info.plist (IOS) -> Edite android/app/build.gradle( NOT android/build.gradle)
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './src/screens/HomeScreen';
import DestinationSearch from './src/screens/DestinationSearch';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <HomeScreen /> */}
      <DestinationSearch />

    </>
  );
};
