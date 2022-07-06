import React, { useEffect, useState } from "react";
// SafeAreaView serve para aparelhos que tem a parte chamada de "notch", parte da camera frontal (Apple, xiaomi)
import { View, TextInput, SafeAreaView } from "react-native";

import styles from "./styles";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const DestinationSearch = (props) => {
  // Criando var para guardar a info digitada e ser usada depois dos TextInput(foi removida ao utilizar api)
  // const [fromText, setFromText] = useState("");
  // const [destinationText, setDestinationText] = useState("");

  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  // Checando se ambos estao
  useEffect(() => {
    console.warn("useEffect foi chamado");
    if (originPlace && destinationPlace) {
      console.warn("Redirect to results");
    }
  }, [originPlace, destinationPlace]);

  return (
    // SafeAreaView serve para aparelhos que tem a parte chamada de "notch", parte da camera frontal (Apple, xiaomi)
    <SafeAreaView>
      <View style={styles.container}>
        {/* Uso da API Google Places AutoComplete */}
        <GooglePlacesAutocomplete
          placeholder="From"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setOriginPlace({ data, details });
            console.log(data, details);
          }}
          styles={{
            textInput: styles.textInput,
          }}
          fetchDetails
          query={{
            key: "AIzaSyCevJFn6GS3QIR2-u05AiwDcWv-e8ZYpIA",
            language: "en",
          }}
        />

        {/* Uso da API Google Places AutoComplete */}
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setDestinationPlace({ data, details });
            console.log(data, details);
          }}
          styles={{
            textInput: styles.textInput,
          }}
          fetchDetails
          query={{
            key: "",
            language: "en",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;

//TODO
//TODO Quando subir, fazer sem enviar key da api google
