import React from "react";
import { View, Text } from "react-native";

// Importando todos os componentes que vão aparecer na HomeScreen
import HomeMap from "../../components/HomeMap/HomeMap";
import CovidMsg from "../../components/CovidMsg";
import HomeSearch from "../../components/HomeSearch";

// Aqui é onde ficam todos os componentes feitos, todos que aparecem na Home principal
const HomeScreen = (props) => {
  return (
    <View>
      <HomeMap />
      <CovidMsg />
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;
