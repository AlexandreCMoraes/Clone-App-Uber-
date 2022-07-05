import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: '#e7e7e7',
        margin: 10,
        padding: 10,
        // Deixar os itens na mesma linha (row), assim fica melhor para editar (aqui entra td de inputText, timeContainer)
        flexDirection: 'row',
        //Colocar os itens em cada lado
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#434343'
    },
    timeContainer: {
        // Deixar os itens na mesma linha (row), assim fica melhor para editar (aqui entra td de timeContainer -> clockcircle, <Text> e keyboard-arrow-down)
        flexDirection: 'row',
        // Espaço entre clockcircle, <Text> e keyboard-arrow-down
        justifyContent: 'space-between',
        width: 100,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 50,
    },
    row: {
        // Deixar os itens na mesma linha (row), assim fica melhor para editar (iconContainer, clockcircle, destinationText)
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderColor: '#dbdbdb'
    },
    iconContainer: {
        backgroundColor: '#b3b3b3',
        padding: 10,
        borderRadius: 25,

    },
    destinationText: {
        marginLeft: 10,
        fontWeight: '500',
        fontSize: 16,
    },
})

export default styles;