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
            // remove PoweredByGoogle da tela
            enablePoweredByContainer={false}
            // colocado para ignorar default styles
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: styles.autocompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
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
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            // precisa sobresescrever o valor de top para 85, criando um objeto de(autocompleteContainer) e desestruturando todo o estilo aplicado no container
            container: { ...styles.autocompleteContainer, top: 85 },
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            // TODO apagar key quando enviar github 05
            key: "",
            language: "en",
          }}
          renderRow={(data) => <PlaceRow data={data} />}
        />
            {/* detalhes ao lado de 'From' e 'where to' (quadrado e circulo e uma linha vertical entre) */}
            <View style={styles.circle} />
        <View style={styles.line} />
        <View style={styles.square} />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
// Get Current Location -> foi feito install yarn add @react-native-community/geolocation 
// Configuration and Permissions -> nao foi preciso seguir alguns passos, pois foi usado expo cli
// Android -> To request access to location, you need to add the following line to your app's AndroidManifest.xml:
{/* <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" /> */}
