import * as React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { Text } from 'react-native';
import { useFonts } from 'expo-font';


export default function DrawerContent(props) {
  const [loaded] = useFonts({
    'DancingScript': require('../assets/fonts/DancingScript.ttf'),
  });
  return (
    <DrawerContentScrollView {...props} >
      <Text style={{ padding: 15, fontSize: 20, color: "#0C2D48", fontFamily: "DancingScript" }}>Select an option</Text>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}