import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const CovidMsg = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only necessary</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
        distinctio animi maiores, explicabo a laborum sunt molestiae soluta.
        Fuga exercitationem minima nesciunt aut voluptatibus quaerat eum ducimus
        rem saepe nulla!
      </Text>
      <Text style={styles.learnMore}>Learn more</Text>
    </View>
  );
};

export default CovidMsg;
