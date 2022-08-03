import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
// import "react-native-gesture-handler";

import Geolocation from 'react-native-geolocation-service';

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
            <Router />
        </>
    );
};