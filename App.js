import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import "react-native-gesture-handler";

import Navigation from "./Navigation/index";
import useCachedResources from "./Hooks/useCachedResources";

export default function App() {

  useCachedResources()
  
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigation></Navigation>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


