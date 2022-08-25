// Sera importado em SearchResults e renderizado
import React from "react";
import { View, Text, Pressable } from "react-native";

import UberTypeRow from "../UberTypeRow";

import typesData from "../../assets/data/types";

const UberTypes = ({ typeState, onSubmit}) => {
  // typeState esta fora do componente (UberTypes), ou seja, a logica das rotas
  // estao aqui (SearchResults). tudo isso para quando clicar e selecionar o tipo de uber
  const [selectedType, setSelectedType] = typeState;
  
  // nao sera usado aqui
  // const confirm = () => {
  //   console.warn("confirm");
  // };

  return (
    <View>
      {/* pega o array existente (typesData) e usa os dados para um novo array usando os dados de UberTypeRow */}
      {typesData.map((type) => (
        <UberTypeRow
          type={type}
          key={type.id}
          // se type de ( {typesData.map((type) => ( ) for igual a type de selectedType , sera 'true' 
          isSelected={type.type === selectedType}
          onPress={() => {
            setSelectedType(type.type);
          }}
        />
      ))}
      {/* <UberTypeRow /> */}

      <Pressable
        onPress={onSubmit}
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
