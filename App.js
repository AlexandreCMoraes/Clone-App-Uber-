import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Feito download dos icones -> add Lista de todas as fontes disponíveis para copiar e colar no Info.plist (IOS) -> Edite android/app/build.gradle( NOT android/build.gradle)
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './src/screens/HomeScreen';
import DestinationSearch from './src/screens/DestinationSearch';
import SearchResults from './src/screens/SearchResults';

export default function App() {
  return (
    <>
    
      <StatusBar barStyle="dark-content" />
      {/* mapa com msg de covid e opcoes de viagem rapida */}
      {/* <HomeScreen /> */}
      {/* pagina de busca de endereço */}
      {/* <DestinationSearch /> */}
      {/* mapa com valores do uber */}
      <SearchResults/>

    </>
  );
};

// feito install do Google Maps Search Component for React Native https://www.npmjs.com/package/react-native-google-places-autocomplete

// feito install do react-native-maps https://github.com/react-native-maps/react-native-maps/blob/HEAD/docs/installation.md
// feito import Enabling Google Maps para ios, esta comentado 
// If you want to enable Google Maps on iOS, obtain the Google API key and edit your AppDelegate.m as follows:

// + #import <GoogleMaps/GoogleMaps.h>

// @implementation AppDelegate
// ...
// (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
// {
  
// TODO colocar a key da api 
// +  [GMSServices provideAPIKey:@"_YOUR_API_KEY_"]; // add this line using the api key obtained from Google Console
// ...


// Add the following to your Podfile above the use_native_modules! function and run pod install in the ios folder:

// # React Native Maps dependencies
// rn_maps_path = '../node_modules/react-native-maps'
// pod 'react-native-google-maps', :path => rn_maps_path


