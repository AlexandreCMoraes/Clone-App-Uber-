import React from "react";
import { View, Text, Dimensions } from "react-native";

// Importando todos os componentes que vão aparecer na HomeScreen
// aqui utiliza o componente HomeMap, onde fez os mapas com as imagens dos uber
import HomeMap from "../../components/HomeMap/HomeMap";
import CovidMsg from "../../components/CovidMsg";
import HomeSearch from "../../components/HomeSearch";

// Aqui é onde ficam todos os componentes feitos, todos que aparecem na Home principal
const HomeScreen = (props) => {
  return (
    <View>
      <View style={{ height: Dimensions.get("window").height - 420 }}>
        <HomeMap />
      </View>
      <CovidMsg />
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;
