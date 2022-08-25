import { API, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

// Nao sera maisn usado, pois sera importado das queries onde foi feita adicao dos carros
// import cars from "../../assets/data/cars";
import { listCars } from "../../graphql/queries";

const HomeMap = (props) => {
  // Usar carros adicionados na query graphql e mostrar na tela
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await API.graphql(graphqlOperation(listCars));
        // mostra os dados da query com todos os carros que foram add
        console.log(response);
        // coloca os dados(carros) na tela
        setCars(response.data.listCars.items);
      } catch (e) {
        console.error(e);
      }
    };
    fetchCars();
  }, []);

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
        latitude: 28.450627,
        longitude: -16.263045,
      }}
    >
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
