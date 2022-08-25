import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Auth } from "aws-amplify";
import React from "react";
import { Pressable, Text, View } from "react-native";

// Feito para customizar o drawer
const CustomDrawer = (props) => {
  return (
    // essa props serve pra estilizar, mas na Root
    <DrawerContentScrollView {...props}>
      <View style={{ backgroundColor: "#212121", padding: 15 }}>
        {/* Imagem e nome do usuario */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {/* Imagem */}
          <View
            style={{
              backgroundColor: "#cacaca",
              width: 50,
              height: 50,
              borderRadius: 25,
              marginRight: 15,
            }}
          />
          {/* Nome */}
          <View>
            <Text style={{ color: "white", fontSize: 24 }}>
              Ale Desenvolvedor
            </Text>
            <Text style={{ color: "lightgrey" }}>5.00 *</Text>
          </View>
        </View>

        {/* Linhas que separam textos acima e abaixo */}
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#989898",
            borderTopWidth: 1,
            borderTopColor: "#989898",
            paddingVertical: 5,
            marginVertical: 10,
          }}
        >
          <Pressable
            onPress={() => {
              console.warn("Messages");
            }}
          >
            <Text style={{ color: "#dddddd", paddingVertical: 5 }}>
              Messages
            </Text>
          </Pressable>
        </View>

        {/* Mensagem dentro do background preto */}
        <Pressable
          onPress={() => {
            console.warn("Do more with your account");
          }}
        >
          <Text style={{ color: "#dddddd", paddingVertical: 5 }}>
            Do more with your account
          </Text>
        </Pressable>

        {/* Mensagem dentro do background preto */}
        <Pressable
          onPress={() => {
            console.warn("Make money driving");
          }}
        >
          <Text style={{ color: "white", paddingVertical: 5 }}>
            Make money driving
          </Text>
        </Pressable>
      </View>
      <DrawerItemList {...props} />

      {/* Botão LOGOUT*/}
      <Pressable
        onPress={() => {
          Auth.signOut();
        }}
      >
        <Text style={{ padding: 5, paddingLeft: 20 }}>Logout</Text>
      </Pressable>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
