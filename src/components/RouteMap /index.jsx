import React from "react";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

const RouteMap = (props) => {
  // TODO apagar key quando enviar github 03
  const GOOGLE_MAPS_APIKEY = "";
  const origin = { latitude: 28.450627, longitude: -16.263045 };
  const destination = { latitude: 28.460127, longitude: -16.269045 };
  
  return (
    <MapView
      style={{ height: "100%", width: "100%" }}
      provider={PROVIDER_GOOGLE}
      //TODO mostra a localizacao atual. Precisa revisar pois nao esta funcionando
      showsUserLocation={true}
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
