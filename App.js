import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';

import Geolocation from 'react-native-geolocation-service';

// react navigation 
// import 'react-native-gesture-handler';

// mostrar as paginas do app(depois de instalar react navigation, nao sera mais necessario)
// import HomeScreen from './src/screens/HomeScreen';
// import DestinationSearch from './src/screens/DestinationSearch';
// import SearchResults from './src/screens/SearchResults';

import Router from './src/navigation/Root';

export default function App() {
    const androidPermissions = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: "UBER App LOCATION Permission",
                    message:
                        "UBER App needs access to your LOCATION " +
                        "so you can take awesome rides.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the LOCATION");
            } else {
                console.log("LOCATION permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    }


    // vai rodar qnd o componente 'mount', se for um sistema operacional ou outro
    useEffect(() => {
        if (Platform.OS === 'android') {
            androidPermissions();
        } else {
            // ios
            Geolocation.requestAuthorization();
        }
    }, [])

    return (
        <>

            <StatusBar barStyle="dark-content" />
            {/* mapa com msg de covid e opcoes de viagem rapida */}
            {/* <HomeScreen /> */}
            {/* pagina de busca de endereço */}
            {/* <DestinationSearch /> */}
            {/* mapa com valores do uber */}
            {/* <SearchResults /> */}
            
            <Router/>

        </>
    );
};