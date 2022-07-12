import React, { useEffect, useState } from "react";
import { View, TextInput, SafeAreaView } from "react-native";

import styles from "./styles";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import PlaceRow from "./PlaceRow";

const DestinationSearch = (props) => {
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
          // coocado para ignorar default styles
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {
              position: "absolute",
              top: 30,
              left: 10,
              right: 10,
            },
            listView: {
              position: "absolute",
              top: 110,
            },
          }}
          fetchDetails
          query={{
            // TODO apagar key quando enviar github 04
            key: "",
            language: "en",
          }}
          // renderizado na lista de busca
          renderRow={(data) => <PlaceRow data={data} />}
        />

        {/* Uso da API Google Places AutoComplete */}
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setDestinationPlace({ data, details });
            console.log(data, details);
          }}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {
              position: "absolute",
              top: 85,
              left: 10,
              right: 10,
            },
          }}
          fetchDetails
          query={{
            // TODO apagar key quando enviar github 05
            key: "",
            language: "en",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
