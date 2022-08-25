// Sera importado em SearchResults e renderizado
import React from "react";
import { View, Image, Text, Pressable } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

import styles from "./styles";

const UberTypeRow = (props) => {
  // typeState esta fora do componente (UberTypes), ou seja, a logica das rotas
  // estao aqui (SearchResults). tudo isso para quando clicar e selecionar o tipo de uber
  const { type, onPress, isSelected } = props;
  const getImage = () => {
    if (type.type === "UberX") {
      return require("../../assets/images/UberX.jpeg");
    }
    if (type.type === "Comfort") {
      return require("../../assets/images/Comfort.jpeg");
    }
    return require("../../assets/images/UberXL.jpeg");
  };
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        { backgroundColor: isSelected ? "#efefef" : "white" },
        // ira mostrar em UberType quando digitar o local de origem e destino, a mudança de cor
      ]}
    >
      <Image
        style={styles.image}
        // source={require("../../assets/images/UberX.jpeg")}
        source={getImage()}
      />
      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {/* serve para dar um espaço '{' '}' */}
          {/* UberX{" "} */}
          {/* agora pega o array e coloca aqui p/ renderizar cada nome */}
          {type.type}{" "}
          <Ionicons name={"person"} size={16}>
            3
          </Ionicons>
        </Text>
        <Text style={styles.time}>8:03Pm drop off</Text>
      </View>

      <View style={styles.rightContainer}>
        <Ionicons name={"pricetag"} size={18} color={"#42d742"} />
        {/* agora pega o array e coloca aqui p/ renderizar cada preço */}
        <Text style={styles.price}>est. ${type.price}</Text>
      </View>
    </Pressable>
  );
};

export default UberTypeRow;
