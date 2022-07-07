import React from "react";
import { View, Text, Dimensions } from "react-native";
import HomeMap from "../../components/HomeMap/HomeMap";
import UberTypes from "../../components/UberTypes";

const SearchResults = () => {
  return (
    <View style={{ display: "flex", justifyContent: "space-between" }}>
      <View style={{ height: Dimensions.get("window").height - 400 }}>
        {/* <View style={{ height: '50%' }}> */}
        <HomeMap />
      </View>
      <View style={{ height: 400 }}>
        {/* <View style={{ height: '50%', backgroundColor: "red" }}> */}
        <UberTypes />
      </View>
    </View>
  );
};

export default SearchResults;
