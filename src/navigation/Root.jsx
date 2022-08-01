import { NavigationContainer } from "@react-navigation/native";

import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import HomeScreen from "../screens/HomeScreen";
import DestinationSearch from "../screens/DestinationSearch";
import SearchResults from "../screens/SearchResults";

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      {/* tira o titulo de cada pagina */}
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        // initialRouteName={"SearchResults"}
      >
        <Stack.Screen name={"Home"} component={HomeScreen} />
        <Stack.Screen
          name={"DestinationSearch"}
          component={DestinationSearch}
        />
        <Stack.Screen name={"SearchResults"} component={SearchResults} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
