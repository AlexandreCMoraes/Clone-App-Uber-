import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import HomeScreen from "../screens/HomeScreen";
import DestinationSearch from "../screens/DestinationSearch";
import SearchResults from "../screens/SearchResults";

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <>
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
    </>
  );
};
export default HomeNavigator;
