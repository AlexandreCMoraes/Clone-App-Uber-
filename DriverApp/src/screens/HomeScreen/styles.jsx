import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // texto e icones de "you're offline"
  bottomContainer: {
    height: 100,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  bottomText: {
    fontSize: 22,
    color: "#4a4a4a",
  },
  roundButton: {
    position: "absolute",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 25,
  },
  //   botao e "GO"
  goButton: {
    position: "absolute",
    backgroundColor: "#1495ff",
    width: 74,
    height: 74,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    bottom: 110,
    left: Dimensions.get("window").width / 2 - 35,
  },
  goText: {
    fontSize: 30,
    color: "white",
    fontweight: "bold",
  },
  //informacao de balanço, referente ao saldo (topo da tela)
  balanceButton: {
    position: "absolute",
    backgroundColor: "black",
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    top: 35,
    left: Dimensions.get("window").width / 2 - 50,
  },
  balanceText: {
    fontSize: 25,
    color: "white",
    fontweight: "bold",
  },
});

export default styles;
