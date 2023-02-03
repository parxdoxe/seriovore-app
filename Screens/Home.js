import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import CustomBtn from "../Components/CustomBtn";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../assets/img/seriovoreTV-home.jpeg")}
      >
        <View style={styles.content}>
          <CustomBtn text={"Inscription"} />
          <CustomBtn text={"Movies"} onPress={()=>navigation.push("Movies")} />
        </View>
      </ImageBackground>

      
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    flex: 1,
  },

  content: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
});
