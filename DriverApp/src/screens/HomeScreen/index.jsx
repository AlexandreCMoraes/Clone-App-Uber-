import React from "react";
import { Text, View } from "react-native";

import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import MapViewDirections from "react-native-maps-directions";

const origin = { latitude: 37.3318456, longitude: -122.0296002 };
const destination = { latitude: 37.771707, longitude: -122.4053769 };
// TODO APAGAR KEY QUANDO ENVIAR AO GITHUB 07
const GOOGLE_MAPS_APIKEY = "AIzaSyDXQFHv6WmWyRg8r_jurLb8GcT3TP7t6Is";

const HomeScreen = () => {
  return (
    <View>
      <Text>skdjlfhgskldjfg</Text>
      <MapView
        style={{ width: "100%", height: "100%" }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
        />
      </MapView>
    </View>
  );
};
export default HomeScreen;
