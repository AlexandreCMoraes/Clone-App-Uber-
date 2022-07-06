// Sera importado em SearchResults e renderizado
import React from "react";
import { View, Text, Pressable } from "react-native";

import UberTypeRow from "../UberTypeRow";

import typesData from "../../assets/data/types";

import styles from "./styles";

const UberTypes = () => {
  const confirm = () => {
    console.warn("confirm");
  };

  return (
    <View>
      {/* pega o array existente (typesData) e usa os dados para um novo array usando os dados de UberTypeRow */}
      {typesData.map((type) => (
        <UberTypeRow type={type} />
      ))}
      {/* <UberTypeRow /> */}

      <Pressable
        onPress={confirm}
        style={{
          // width: "100%",
          backgroundColor: "black",
          padding: 10,
          margin: 10,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Confirm Uber</Text>
      </Pressable>
    </View>
  );
};

export default UberTypes;
