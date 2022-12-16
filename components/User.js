import React from 'react';
import { View, StatusBar, Text, Image } from 'react-native';
import { useFonts } from 'expo-font';

export default function (props) {
    const [loaded] = useFonts({
        'DancingScript': require('../assets/fonts/DancingScript.ttf'),
    });

    if (!loaded) {
        return null;
    }
    return (
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: 20, height: 100 }}>
            <Image source={require("../images/user.webp")} style={{ width: 50, height: 50, borderRadius: 100 }} />
            <View style={{ marginLeft: 10, display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                <Text style={{ fontFamily: "DancingScript" }}>{props.user.name}</Text>
                <Text style={{ fontFamily: "DancingScript" }}>{props.user.email}</Text>
            </View>
        </View>
    );
}