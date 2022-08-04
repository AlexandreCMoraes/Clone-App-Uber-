import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Dimensions } from "react-native";
// aqui utiliza o componente RouteMap com as direcoes marcadas no mapa sobre a viagem
import RouteMap from "../../components/RouteMap ";
import UberTypes from "../../components/UberTypes";

const SearchResults = () => {
  const route = useRoute();

  // ver quais serao os dados recebidos
  console.log(route.params);
  const {originPlace, destinationPlace} = route.params

  return (
    <View style={{ display: "flex", justifyContent: "space-between" }}>
      <View style={{ height: Dimensions.get("window").height - 400 }}>
        <RouteMap origin={originPlace}  destination={destinationPlace}/>
      </View>

      <View style={{ height: 400 }}>
        <UberTypes />
      </View>
    </View>
  );
};

export default SearchResults;
