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
import useFetch from "../Hooks/useFetch";

const Home = () => {
    const navigation = useNavigation()

    var [data] = useFetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=40009de0f135cfd09989d99f18892b45"
      );
      
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../assets/img/seriovoreTV-home.jpeg")}
      >
        <View style={styles.content}>
          <CustomBtn text={"Inscription"} />
          <CustomBtn text={"Movies"} onPress={()=>navigation.push("Movies", {data: data})} />
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
