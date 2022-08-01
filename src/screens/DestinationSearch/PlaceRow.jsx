import React from "react";
import { Text, View } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

import styles from "./styles";

// feito para colocar os icones ao lado da descricao dos lugares (que tbm foi  udado para so receber a descricao)

const PlaceRow = ({ data }) => {
  console.log(data);
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        {/* TODO feito destinos pre definido */}

        {data.description === "Home" ? (
          <Entypo name="home" size={20} color={"white"} />
        ) : (
          <Entypo name="location-pin" size={20} color={"white"} />
        )}
      </View>
      <Text style={styles.locationText}>
        {data.description || data.vicinity}
      </Text>
    </View>
  );
};
export default PlaceRow;
