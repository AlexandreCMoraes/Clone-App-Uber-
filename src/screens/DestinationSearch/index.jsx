import React, { useEffect, useState } from "react";
import { View, SafeAreaView } from "react-native";

import styles from "./styles";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import PlaceRow from "./PlaceRow";
import { useNavigation } from "@react-navigation/native";

navigator.geolocation = require("react-native-geolocation-service");

// TODO feito destinos pre definido
const homePlace = {
  description: "Home",
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: "Work",
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

const DestinationSearch = (props) => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  const navigation = useNavigation();

  // Checando se ambos estao funcionam depois de renderizar a tela
  useEffect(() => {
    console.log("useEffect foi chamado");
    if (originPlace && destinationPlace) {
      navigation.navigate("SearchResults");
      console.log("Redirecionando para pagina SearchResults");
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
          // remove PoweredByGoogle da tela
          enablePoweredByContainer={false}
          // colocado para ignorar default styles
          suppressDefaultStyles
          //TODO mostra a localizacao atual. Precisa revisar pois nao esta funcionando
          // currentLocation={true}
          // currentLocationLabel="Current location"
          styles={{
            textInput: styles.textInput,
            container: styles.autocompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          fetchDetails
          getDefaultValue={() => ""}
          query={{
            // TODO apagar key quando enviar github 04
            key: "",
            language: "en",
          }}
          // renderizado na lista de busca
          renderRow={(data) => <PlaceRow data={data} />}
          renderDescription={(data) => data.description || data.vicinity}
          predefinedPlaces={[homePlace, workPlace]}
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
