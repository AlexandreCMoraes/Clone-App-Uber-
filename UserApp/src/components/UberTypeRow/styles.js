import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        // coloca a disposição tudo em uma linha
        flexDirection: 'row',
        // espaço entre os itens e alinhamento
        // justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    image: {
        height: 70,
        width: 80,
        // coloca a imagem dentro da view toda, do container
        resizeMode: 'contain',
    },
    middleContainer: {
        flex: 1,
        marginHorizontal: 10,
    },
    type: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
    },
    time: {
        color: '#5d5d5d'
    },
    // contem a tag de preço e text
    rightContainer: {
        width: 100,
        flexDirection: 'row',
        // alignItems: 'center',
        // coloca no fim do container
        justifyContent: 'flex-end',
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 5,
    }
})

export default styles;