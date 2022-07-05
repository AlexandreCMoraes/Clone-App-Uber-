import React from "react";
import { View, Text } from "react-native";

// Importando icones para utilizar no componente
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";

import styles from "./styles";

const HomeSearch = (props) => {
  return (
    <View>
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>Where to?</Text>

        <View style={styles.timeContainer}>
          <AntDesign name={"clockcircle"} size={16} color={"#535353"} />
          <Text>Now</Text>
          <MaterialIcons name={"keyboard-arrow-down"} size={16} />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name={"clockcircle"} size={20} color={"#fff"} />
        </View>
        <Text style={styles.destinationText}>Spin NigthClub</Text>
      </View>
      <View style={styles.row}>
        {/* Para mudar somente a cor de um icone sem alterar o nome (iconContainer como esta no icone acima) e colocar no style.js, foi colocado dentro de um array e assim declarado um obj*/}
        <View style={[styles.iconContainer, { backgroundColor: "#218cff" }]}>
          <Entypo name={"home"} size={20} color={"#fff"} />
        </View>
        <Text style={styles.destinationText}>Home</Text>
      </View>
    </View>
  );
};

export default HomeSearch;
