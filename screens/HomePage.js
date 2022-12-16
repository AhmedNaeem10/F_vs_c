import React from 'react';
import {View, StatusBar, Text} from 'react-native';
import { useFonts } from 'expo-font';


export default function Home(){
    const [loaded] = useFonts({
        'DancingScript': require('../assets/fonts/DancingScript.ttf'),
    });

    if (!loaded) {
        return null;
    }
    return(
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <StatusBar 
                backgroundColor="#0C2D48"
                barStyle={"light-content"}
                showHideTransition={"slide"}
            />
            <View style={{width: "80%"}}><Text style={{fontSize: 18, alignSelf: "center", textAlign: "center", fontFamily: "DancingScript"}}>A sample App to differ <Text style={{color: "#0C2D48", fontFamily: "DancingScript"}}>Class Based Components</Text> and <Text style={{color: "#0C2D48", fontFamily: "DancingScript"}}>Functional Components</Text></Text></View>
        </View>
    );
}