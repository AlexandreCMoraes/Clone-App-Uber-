import React, { useState } from "react";
import { Dimensions, Pressable, Text, View } from "react-native";

import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import MapViewDirections from "react-native-maps-directions";

import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

import styles from "./styles";

const origin = { latitude: 37.3318456, longitude: -122.0296002 };
const destination = { latitude: 37.771707, longitude: -122.4053769 };
// TODO APAGAR KEY QUANDO ENVIAR AO GITHUB 07AIzaSyCttAlkYJMglu7-CLfvGm_uGwkAeFhDBec
const GOOGLE_MAPS_APIKEY = "AIzaSyCttAlkYJMglu7-CLfvGm_uGwkAeFhDBec";

const HomeScreen = () => {
  const [isOnLine, setIsOnLine] = useState(false);

  const onGoPress = () => {
    setIsOnLine(!isOnLine);
  };

  return (
    <View>
      <MapView
        style={{ width: "100%", height: Dimensions.get("window").height - 100 }}
        provider={PROVIDER_GOOGLE}
        // TODO nao mostra localização no mapa
        showsUserLocation={true}
        initialRegion={{
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0121,
          latitude: 28.450627,
          longitude: -16.263045,
        }}
      >
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
        />
      </MapView>

      {/* botao de "GO" no centro */}
      <Pressable
        onPress={() => console.warn("Balance")}
        style={styles.balanceButton}
      >
        <Text style={[styles.balanceText]}>
          <Text style={{ color: "green" }}>$</Text>
          {""}
          0.00
        </Text>
      </Pressable>

      {/* botao de menu a esquerda superior */}
      <Pressable
        onPress={() => console.warn("Hey")}
        style={[styles.roundButton, { top: 40, left: 10 }]}
      >
        <Entypo name={"menu"} size={24} />
      </Pressable>

      {/* botao de pesquisa a direita superior */}
      <Pressable
        onPress={() => console.warn("Hey")}
        style={[styles.roundButton, { top: 40, right: 10 }]}
      >
        <AntDesign name={"search1"} size={24} />
      </Pressable>

      {/* botao de localizacao a esquerda abaixo */}
      <Pressable
        onPress={() => console.warn("Hey")}
        style={[styles.roundButton, { bottom: 120, left: 10 }]}
      >
        <Ionicons name={"locate"} size={24} />
      </Pressable>

      {/* botao de menu a esquerda abaixo */}
      <Pressable
        onPress={() => console.warn("Hey")}
        style={[styles.roundButton, { bottom: 120, right: 10 }]}
      >
        <Entypo name={"menu"} size={24} />
      </Pressable>

      {/* botao de "GO" no centro com switch */}
      <Pressable onPress={onGoPress} style={styles.goButton}>
        <Text style={[styles.goText]}>{isOnLine ? "END" : "GO"}</Text>
      </Pressable>

      {/* botoes envolvendo texto abaixo com switch*/}
      <View style={styles.bottomContainer}>
        <Ionicons name={"options"} size={30} />
        {/* mostra se esta online ou offline */}
        {isOnLine ? (
          <Text style={styles.bottomText}>You're Online</Text>
        ) : (
          <Text style={styles.bottomText}>You're Offline</Text>
        )}

        <AntDesign name={"bars"} size={30} color="#4a4a4a" />
      </View>
    </View>
  );
};
export default HomeScreen;
