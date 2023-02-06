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
import TinderCard from "react-tinder-card";
import { useRoute } from "@react-navigation/native";



const Movies = () => {
  const [lastDirection, setLastDirection] = useState();

  const route = useRoute()
  const {data} = route.params
  

      
  const [movies, setMovies] = useState(data);

  const IMAGE_URL = "https://image.tmdb.org/t/p/w500/";


  const swiped = (direction, id) => {
    console.log("removing: " + id);
    setMovies((current) => current.filter((movie) => movie.id !== id));
    setLastDirection(direction);
    console.log(direction);
  };

 


//   const outOfFrame = (id) => {
    
// };


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

        <View style={styles.cardContainer}>
          {movies?.map((movie) => (
            <TinderCard
              onSwipe={(dir) => swiped(dir, movie.id)}
            //   onCardLeftScreen={() => outOfFrame(movie.id)}
            >
              <View style={styles.movies}>
                <CardMovie
                  image={{ uri: `${IMAGE_URL}${movie.poster_path}` }}
                />
              </View>
            </TinderCard>
          ))}

        </View>
          {!movies.length && <Text style={styles.text}>Plus de films disponible...</Text> }
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

  cardContainer: {
    width: "10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  //   movies: {
  //     display: "flex",
  //     alignItems: "center",
  //     justifyContent: "space-between",
  //     height: "100%",
  //   },
  movies: {
    position: "absolute",

    borderColor: "#93ABB0",
    borderRadius: 25,
    resizeMode: "cover",
  },
});
