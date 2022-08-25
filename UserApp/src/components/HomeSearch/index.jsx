import React from "react";
import { View, Text, Pressable } from "react-native";

// Importando icones para utilizar no componente
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const HomeSearch = (props) => {
  // usando hook para navegar entre paginas
  const navigation = useNavigation();

  const goToSearch = () => {
    navigation.navigate("DestinationSearch");
    console.log("redirecionando para pagina DestinationSearch")
  };
  return (
    <View>
      {/* clicavel para ir a pagina destinationSearch */}
      <Pressable onPress={goToSearch} style={styles.inputBox}>
        <Text style={styles.inputText}>Where to?</Text>

        <View style={styles.timeContainer}>
          <AntDesign name={"clockcircle"} size={16} color={"#535353"} />
          <Text>Now</Text>
          <MaterialIcons name={"keyboard-arrow-down"} size={16} />
        </View>
      </Pressable>

      {/* viagens anteriores "clicaveis" */}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name={"clockcircle"} size={20} color={"#fff"} />
        </View>
        <Text style={styles.destinationText}>Spin NigthClub</Text>
      </View>

      {/* viajem para home */}
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
