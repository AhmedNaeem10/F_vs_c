import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerToggleButton } from '@react-navigation/drawer';
import DrawerContent from '../components/DrawerContent';
import Home from '../screens/HomePage';
import ClassComponent from '../screens/ClassComponent';
import FunctionComponent from '../screens/FunctionalComponent';
import { useFonts } from 'expo-font';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
    const [loaded] = useFonts({
        'DancingScript': require('../assets/fonts/DancingScript.ttf'),
    });
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    drawerActiveTintColor: "white",
                    drawerActiveBackgroundColor: "#0C2D48",
                    drawerLabelStyle: {
                        fontFamily: "DancingScript"
                    },
                    drawerInactiveTintColor: "#0C2D48",
                    drawerPosition: "right",
                    headerLeft: false,
                    headerTintColor: "white",
                    headerTitleStyle: {
                        fontFamily: "DancingScript"
                    },
                    headerStyle:{
                        backgroundColor: "#0C2D48",
                    },
                    headerRight: () => <DrawerToggleButton tintColor='white' />
                }}
                useLegacyImplementation
                drawerContent={(props) => <DrawerContent {...props} />}
            >
                <Drawer.Screen name="Home" component={Home} options={{ unmountOnBlur: true }} />
                <Drawer.Screen name="Functional Component" component={FunctionComponent} options={{ unmountOnBlur: true }} />
                <Drawer.Screen name="Class Component" component={ClassComponent} options={{ unmountOnBlur: true }} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}