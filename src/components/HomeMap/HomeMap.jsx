import React from "react";
import { Image } from "react-native";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
// import { enableLatestRenderer } from "react-native-maps";

import cars from "../../assets/data/cars";

const HomeMap = (props) => {
  const getImage = (type) => {
    // type nao sera mais objeto, somente uma string
    if (type === "UberX") {
      return require("../../assets/images/top-UberX.png");
    }
    if (type === "Comfort") {
      return require("../../assets/images/top-Comfort.png");
    }
    return require("../../assets/images/top-UberXL.png");
  };
  return (
    <MapView
      style={{ height: "100%", width: "100%" }}
      provider={PROVIDER_GOOGLE}
      //TODO mostra a localizacao atual. Precisa revisar pois nao esta funcionando
      showsUserLocation={true}
      // userInterfaceStyle="dark"
      showsMyLocationButton={true}
      // showsCompass={true}
      initialRegion={{
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
        //pego do data/cars
        latitude: 28.450627,
        longitude: -16.263045,
      }}
    >
      {/* feito com map para melhorar */}
      {cars.map((car) => (
        <Marker
          key={car.id}
          coordinate={{ latitude: car.latitude, longitude: car.longitude }}
        >
          <Image
            style={{
              width: 60,
              height: 60,
              resizeMode: "contain",

              transform: [
                {
                  rotate: `${car.heading}deg`,
                },
              ],
            }}
            source={getImage(car.type)}
          />
        </Marker>
      ))}
    </MapView>
  );
};

export default HomeMap;
