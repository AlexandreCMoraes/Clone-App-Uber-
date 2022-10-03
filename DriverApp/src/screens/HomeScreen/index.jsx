import React, { useEffect, useState } from "react";
import { Dimensions, Pressable, Text, View } from "react-native";

import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import MapViewDirections from "react-native-maps-directions";

import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import styles from "./styles";

import NewOrderPopup from "../../component/NewOrderPopup";

const origin = { latitude: 28.450927, longitude: -16.260845 };
const destination = { latitude: 37.771707, longitude: -122.4053769 };
// TODO APAGAR KEY QUANDO ENVIAR AO GITHUB 07
const GOOGLE_MAPS_APIKEY = "clara de ovo";

const HomeScreen = () => {
  const [isOnLine, setIsOnLine] = useState(false);
  // TODO nao pega posição e nao mostra tempo e duracao
  const [myPosition, setMyPosition] = useState(null);
  const [order, setOrder] = useState(null);
  // pegando dados do squema
  const [newOrder, setNewOrder] = useState({
    id: "1",
    type: "UberX",

    originLatitude: 28.450027,
    originLongitude: -16.263845,

    destLatitude: 28.450927,
    destLongitude: -16.260845,

    user: {
      rating: 4.8,
      name: "John",
    },
  });
  // rejeitar corrida
  const onDecline = () => {
    setNewOrder(null);
  };
  // aceitar corrida
  const onAccept = (newOrder) => {
    setOrder(newOrder);
    setNewOrder(null);
  };
  // iniciar ou terminar atividade
  const onGoPress = () => {
    setIsOnLine(!isOnLine);
  };
  // localizacao do usuario
  const onUserLocationChange = (event) => {
    console.log("onUserLocationChange");
    setMyPosition(event.coordinate);
  };
  // mostra que foi encontrado
  const onDirectionFound = (e) => {
    console.log("Direction found: ", e);
    if (order) {
      setOrder({
        ...order,
        distance: e.distance,
        duration: e.duration,
        pickedUp: order.pickedUp || e.distance < 0.2,
      });
    }
  };
  //
  const getDestination = () => {
    if (order && order.pickedUp) {
      return {
        latitude: order.destLatitude,
        longitude: order.destLongitude,
      };
    }
    return {
      latitude: order.originLatitude,
      longitude: order.originLongitude,
    };
  };

  // deixar cliente se distancia for baixa
  // useEffect(() => {
  //   if (order && order.distance && order.distance < 0.2) {
  //     setOrder({
  //       ...order,
  //       pickedUp: true,
  //     });
  //   }
  // }, [order]);

  // mostra se esta online ou offline
  const renderBottomTitle = () => {
    // deixando cliente
    if (order && order.pickedUp) {
      return (
        <View style={{ alignItems: "center" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>{order.duration ? order.duration.toFixed(1) : "?"} min</Text>
            <View
              style={{
                backgroundColor: "#d41212",
                marginHorizontal: 10,
                width: 35,
                height: 35,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
              }}
            >
              <FontAwesome5 name={"user-astronaut"} color={"white"} size={35} />
            </View>
            <Text>{order.distance ? order.distance.toFixed(1) : "?"} Km</Text>
          </View>
          <Text style={styles.bottomText}>Dropping off {order.user.name}</Text>
        </View>
      );
    }
    // pegando cliente
    if (order) {
      return (
        <View style={{ alignItems: "center" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>{order.duration ? order.duration.toFixed(1) : "?"} min</Text>
            <View
              style={{
                backgroundColor: "#1e9203",
                marginHorizontal: 10,
                width: 35,
                height: 35,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
              }}
            >
              <FontAwesome5 name={"user-astronaut"} color={"white"} size={35} />
            </View>
            <Text>{order.distance ? order.distance.toFixed(1) : "?"} Km</Text>
          </View>
          <Text style={styles.bottomText}>Picking up {order.user.name}</Text>
        </View>
      );
    }
    if (isOnLine) {
      return <Text style={styles.bottomText}>You're Online</Text>;
    }
    return <Text style={styles.bottomText}>You're Offline</Text>;
  };

  return (
    <View>
      <MapView
        style={{ width: "100%", height: Dimensions.get("window").height - 100 }}
        provider={PROVIDER_GOOGLE}
        // TODO nao mostra localização no mapa
        showsUserLocation={true}
        onUserLocationChange={onUserLocationChange}
        initialRegion={{
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0121,
          latitude: 28.450627,
          longitude: -16.263045,
        }}
      >
        {order && (
          <MapViewDirections
            origin={myPosition}
            onReady={onDirectionFound}
            destination={getDestination()}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={5}
            strokeColor="black"
          />
        )}
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
        {/* {isOnLine ? (
          <Text style={styles.bottomText}>You're Online</Text>
        ) : (
          <Text style={styles.bottomText}>You're Offline</Text>
        )} */}

        {renderBottomTitle()}

        <AntDesign name={"bars"} size={30} color="#4a4a4a" />
      </View>

      {/* aparece um popup na tela para aceitar a viagem ou nao com essas informacoes */}
      {newOrder && (
        <NewOrderPopup
          newOrder={newOrder}
          duration={2}
          distance={0.5}
          onDecline={onDecline}
          onAccept={() => onAccept(newOrder)}
        />
      )}
    </View>
  );
};
export default HomeScreen;
