import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import theme from "../theme";
import ButtonTransparent from "../Components/ButtonTransparent";
import useFetch from "../Hooks/useFetch";
import CardMovie from "../Components/CardMovie";
const screenHeight = Dimensions.get("window").height;

const Movies = () => {
  const [movies] = useFetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=40009de0f135cfd09989d99f18892b45&language=en-US&page=1"
  );

  const IMAGE_URL = "https://image.tmdb.org/t/p/w500/";

  return (
    <View style={styles.container}>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.header}>
          <View style={styles.content}>
            <Text style={styles.title}>On regarde quoi ?</Text>
            <Text style={styles.text}>Découvrez films et séries.</Text>
          </View>

          <TouchableOpacity style={styles.profile}>
            <Image
              style={styles.profileImg}
              source={require("../assets/img/dinosaur.png")}
            />
            <Text style={styles.profileText}>Profil</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.choice}>
          <ButtonTransparent text={"Films"} />
          <ButtonTransparent text={"Séries"} />
          <ButtonTransparent btnStyle={styles.btnStyle} text={"Catégories"} />
        </View>

        <View style={styles.movies}>
          {movies?.map((movie) => (
            <CardMovie
              text={movie.original_title}
              image={{ uri: `${IMAGE_URL}${movie.poster_path}` }}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Movies;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#20262E",
    padding: "5%",
  },
//   contentContainer: {
//     flex: 1,
//     width: "100%",
//   },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontFamily: theme.fonts.medium,
    color: "#FFF",
    fontSize: 20,
  },

  text: {
    fontFamily: theme.fonts.regular,
    color: "#93ABB0",
  },

  profile: {
    alignItems: "center",
  },

  profileImg: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },

  profileText: {
    fontFamily: theme.fonts.regular,
    color: "#93ABB0",
    fontSize: 10,
    letterSpacing: 2,
  },

  choice: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },

  btnStyle: {
    width: "30%",
  },

  movies: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
  },
});
