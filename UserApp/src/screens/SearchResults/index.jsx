import { useNavigation, useRoute } from "@react-navigation/native";
import { API, Auth, graphqlOperation } from "aws-amplify";
import React, { useState } from "react";
import { View, Dimensions, Alert } from "react-native";
// aqui utiliza o componente RouteMap com as direcoes marcadas no mapa sobre a viagem
import RouteMap from "../../components/RouteMap ";
import UberTypes from "../../components/UberTypes";

import { createOrder } from "../../graphql/mutations";

const SearchResults = () => {
  const typeState = useState(null);

  const route = useRoute();
  const navigation = useNavigation();

  // ver quais serao os dados recebidos
  console.log("\n==========ESTRUTURA DE DADOS DE ROTAS==========");
  console.log(route.params);
  const { originPlace, destinationPlace } = route.params;

  // ao selecionar e dar submit no tipo de uber, envia os dados ao server
  const onSubmit = async () => {
    // coloca em posicao 0
    const [type] = typeState;
    // se nao tiver selecionado, so retorna
    if (!type) {
      return;
    }

    // submit para o server
    try {
      // usuario tera que ser pego do cognito
      const userInfo = await Auth.currentAuthenticatedUser();
      // ira mostrar a estrutura dos dados
      console.log("\n==========ESTRUTURA DOS DADOS DO USERINFO==========");
      console.log(userInfo);
      const date = new Date();
      const input = {
        createdAt: date.toISOString(),
        type,
        originLatitude: originPlace.details.geometry.location.lat,
        originLongitude: originPlace.details.geometry.location.lng,
        destLatitude: destinationPlace.details.geometry.location.lat,
        destLongitude: destinationPlace.details.geometry.location.lng,
        // usuario tera que ser pego do cognito
        // TODO verificar motivo de nao mostrar dados de usuario no db ao confirmar na pagina de uberTypes (SearchResults, UberTypes, UberTypeRow)
        userId: userInfo.attributes.sub,
        carId: "1",
      };
      const response = await API.graphql(
        graphqlOperation(createOrder, {
          input: input,
        })
      );
      console.log("\n==========ESTRUTURA DOS DADOS DEPOIS DE ENVIAR==========");
      console.log(response);
      Alert.alert("Oba", "Pedido feito com sucesso", [
        { text: "Go home", onPress: () => navigation.navigate("Home") },
      ]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={{ display: "flex", justifyContent: "space-between" }}>
      <View style={{ height: Dimensions.get("window").height - 400 }}>
        <RouteMap origin={originPlace} destination={destinationPlace} />
      </View>

      <View style={{ height: 400 }}>
        {/* typeState esta fora do componente (UberTypes), ou seja, a logica das rotas
         estao aqui (SearchResults). tudo isso para quando clicar e selecionar o tipo de uber */}
        <UberTypes typeState={typeState} onSubmit={onSubmit} />
      </View>
    </View>
  );
};

export default SearchResults;
