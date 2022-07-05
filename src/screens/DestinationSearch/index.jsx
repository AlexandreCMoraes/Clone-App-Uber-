import React, { useState } from "react";
// SafeAreaView serve para aparelhos que tem a parte chamada de "notch", parte da camera frontal (Apple, xiaomi)
import { View, TextInput, SafeAreaView } from "react-native";

import styles from "./styles";

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


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

        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: "AIzaSyBMiQ55Xu9v0REUJCaIVU140-5FW_MWfSE",
            language: "en",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;

//TODO video com info do gooogle api entre 1:27:17 e 1:30:00
//TODO AIzaSyBMiQ55Xu9v0REUJCaIVU140-5FW_MWfSE
