import React from "react";
import { View, Text, Image, FlatList } from "react-native";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
// import { enableLatestRenderer } from "react-native-maps";

import cars from "../../assets/data/cars";

const RouteMap = (props) => {
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
      initialRegion={{
        // latitude: 37.78825,
        // longitude: -122.4324,
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
            style={{ width: 60, height: 60, resizeMode: "contain" }}
            source={getImage(car.type)}
          />
        </Marker>
      ))}
      {/* Nao funcionou com flatList pois é componente do ScrollView */}
      {/* <FlatList
        data={cars}
        renderItem={({ item }) => (
          <Marker
            coordinate={{ latitude: item.latitude, longitude: item.longitude }}
          >
            <Image
              style={{ width: 60, height: 60, resizeMode: "contain" }}
              source={getImage(item.type)}
            />
          </Marker>
        )}
      /> */}

      {/* <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }}>
        <Image
          style={{ width: 60, height: 60, resizeMode: "contain" }}
          source={require("../../assets/images/top-UberX.png")}
        />
        {/* nao apareceu a imagem do carro. Sem saber motivo ainda (lembranca: Marker tinha que estar dentro de MapView e nao fora, assim aparece a imagem dentro da tag pai) mas sem sucesso ao redimensionar. Tive que colocar a tag image para estilizar */}
      {/* image={require("../../assets/images/top-UberX.png")} */}
      {/* abaixo nao funciona */}
      {/* image={{uri: '../../assets/images/top-UberX.png'}} */}
      {/* </Marker> */}
    </MapView>
  );
};

export default RouteMap;
