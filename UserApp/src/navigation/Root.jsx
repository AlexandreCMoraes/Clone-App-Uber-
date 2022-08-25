import React from "react";

import { createDrawerNavigator, DrawerContent } from "@react-navigation/drawer";
import "react-native-gesture-handler";

import HomeNavigator from "./Home";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
import CustomDrawer from "./CustomDrawer";

const Drawer = createDrawerNavigator();

const DummyScreen = (props) => (
  <View style={{ justifyContent: "center", alignItems: "center" }}>
    <Text>{props.name}</Text>
  </View>
);

const RootNavigator = () => {
  return (
    <NavigationContainer>
      
      <Drawer.Navigator     
        // TODO lembrar de tirar defaultStatus="open" (feito pra facilitar edição) e deixar screenOptions={{ headerShown: false }}. Tentar aumentar mais o mnue lateral p/ direita
        // defaultStatus="open"
        screenOptions={{ headerShown: false }}
        // sera customizado em outro component
        drawerContent={(props) => <CustomDrawer {...props} />}
      >
        <Drawer.Screen name="Home" component={HomeNavigator} />

        <Drawer.Screen name="Your Trips">
          {/* Error: Got an invalid value for 'children' prop for the screen 'Settings '. It must be a function returning a React Element. Qnd nao tem {() => } */}
          {() => <DummyScreen name={"Your Trips"} />}
        </Drawer.Screen>

        <Drawer.Screen name="Help">
          {() => <DummyScreen name={"Help"} />}
        </Drawer.Screen>

        <Drawer.Screen name="Wallet">
          {() => <DummyScreen name={"Wallet"} />}
        </Drawer.Screen>

        <Drawer.Screen name="Settings ">
          {() => <DummyScreen name={"Settings "} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
