import React from "react";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

const RouteMap = (props) => {
  // TODO apagar key quando enviar github 03
  const GOOGLE_MAPS_APIKEY = "AIzaSyCevJFn6GS3QIR2-u05AiwDcWv-e8ZYpIA";
  const origin = { latitude: 28.450627, longitude: -16.263045 };
  const destination = { latitude: 28.460127, longitude: -16.269045 };
  // const origin = { latitude: 37.3318456, longitude: -122.0296002 };
  // const destination = { latitude: 37.771707, longitude: -122.4053769 };

  return (
    <MapView
      style={{ height: "100%", width: "100%" }}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
        //pego do data/cars
        latitude: 28.450627,
        longitude: -16.263045,
      }}
    >
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={4}
        strokeColor="black"
      />
      <Marker
        coordinate={origin}
        title={'Origin'}
      />
      <Marker
      coordinate={destination}
      title={'Destination'}
    />
    </MapView>
  );
};

export default RouteMap;
