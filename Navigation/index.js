import { View, Text, Dimensions } from 'react-native'
import React from 'react'

import { SafeAreaView } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";

import Inscription from "../Screens/Inscription"
import Home from '../Screens/Home';
import Movies from '../Screens/Movies';

const Stack = createStackNavigator();
const Navigation = () => {
    

  return (
    <SafeAreaView style={{ flex: 1}}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home}></Stack.Screen> 
        <Stack.Screen name="Inscription" component={Inscription}></Stack.Screen> 
        <Stack.Screen name="Movies" component={Movies}></Stack.Screen> 
      </Stack.Navigator>
    </SafeAreaView>
  )
}

export default Navigation