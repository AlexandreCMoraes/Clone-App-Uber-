import { NavigationContainer } from "@react-navigation/native";

import React from "react";

import HomeScreen from "../screens/HomeScreen";

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );
};
export default RootNavigator;
