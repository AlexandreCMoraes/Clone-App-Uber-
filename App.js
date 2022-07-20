import { StatusBar } from 'expo-status-bar';
<<<<<<< HEAD
import { StyleSheet, Text, View } from 'react-native';
=======
import React, { useEffect } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
>>>>>>> 01ddee465d267e7b545df2faf7c40944c5ef0ddb

import Geolocation from '@react-native-community/geolocation';


// mostrar as paginas do app
import HomeScreen from './src/screens/HomeScreen';
import DestinationSearch from './src/screens/DestinationSearch';
import SearchResults from './src/screens/SearchResults';
import  React, { useEffect } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';


navigator.geolocation = require('@react-native-community/geolocation');

export default function App() {
<<<<<<< HEAD
   //TODO permissao p/ utilizar a localizacao do dispositivo, e vai ser chamado onde interessa, somente para android essa permissao
   const androidPermissions = async()=>{
=======
  //TODO permissao p/ utilizar a localizacao do dispositivo, e vai ser chamado onde interessa, somente para android essa permissao
  const androidPermissions = async()=>{
>>>>>>> 01ddee465d267e7b545df2faf7c40944c5ef0ddb
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "UBER App Camera Permission",
          message:
            "UBER App needs access to your LOCATION " +
            "so you can take awesome rides.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the LOCATION");
      } else {
        console.log("LOCATION permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }
<<<<<<< HEAD

=======
  
>>>>>>> 01ddee465d267e7b545df2faf7c40944c5ef0ddb
  // vai rodar qnd o componente 'mount' se for um sistema operacional ou outro
  useEffect(()=>{
    if(Platform.OS === 'android'){
      androidPermissions();
    }else{
      // ios
      Geolocation.requestAuthorization();
    }
  },[])
<<<<<<< HEAD
=======
  
>>>>>>> 01ddee465d267e7b545df2faf7c40944c5ef0ddb
  return (
    <>
    
      <StatusBar barStyle="dark-content" />
      {/* mapa com msg de covid e opcoes de viagem rapida */}
      {/* <HomeScreen /> */}
      {/* pagina de busca de endereço */}
      <DestinationSearch />
      {/* mapa com valores do uber */}
      {/* <SearchResults/> */}

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


