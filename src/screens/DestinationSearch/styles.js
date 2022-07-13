import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        // backgroundColor: '#eee',
        height: '100%',
    },
    textInput: {
        padding: 10,
        backgroundColor: '#eee',
        marginVertical: 5,
        marginLeft: 20,
    },
    separator: {
        backgroundColor: '#efefef',
        height: 2,
    },
    listView: {
        position: "absolute",
        top: 110,
    },
    autocompleteContainer: {
        position: "absolute",
        top: 30,
        left: 10,
        right: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    iconContainer: {
        backgroundColor: '#a2a2a2',
        padding: 5,
        borderRadius: 50,
        marginRight: 15,
    },
    locationText: {

    },
    // detalhes ao lado de 'From' e 'where to' (quadrado e circulo e uma linha vertical entre)
    circle: {
        width: 10,
        height: 10,
        backgroundColor: 'black',
        position: 'absolute',
        top: 50,
        left: 10,
        borderRadius: 5,
    },
    line: {
        width: 1,
        height: 50,
        backgroundColor: '#919191',
        position: 'absolute',
        top: 63,
        left: 15,
        borderRadius: 5,
    },
    square: {
        width: 10,
        height: 10,
        backgroundColor: 'black',
        position: 'absolute',
        top: 115,
        left: 10,
    },
})

export default styles;
