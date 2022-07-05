import React, { useState } from "react";
// SafeAreaView serve para aparelhos que tem a parte chamada de "notch", parte da camera frontal (Apple, xiaomi)
import { View, TextInput, SafeAreaView } from "react-native";

import styles from "./styles";

const DestinationSearch = (props) => {
  // Criando var para guardar a info digitada e ser usada depois dos TextInput
  const [fromText, setFromText] = useState("");
  const [destinationText, setDestinationText] = useState("");

  return (
    // SafeAreaView serve para aparelhos que tem a parte chamada de "notch", parte da camera frontal (Apple, xiaomi)
    <SafeAreaView>
      <View style={styles.container}>
        {/* Escrever na area */}
        <TextInput
          // two-way-data-bind
          value={fromText}
          onChangeText={setFromText}
          style={styles.textInput}
          placeholder="From"
        />
        <TextInput
          // two-way-data-bind
          value={destinationText}
          onChangeText={setDestinationText}
          style={styles.textInput}
          placeholder="Where to?"
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;

//TODO video parado em 1:27:17
