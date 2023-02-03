import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const CardMovie = ({ text, image, card }) => {
  return (
    <TouchableOpacity style={{ ...styles.card, ...card }}>
      <Image style={styles.image} source={image}></Image>
    </TouchableOpacity>
  );
};

export default CardMovie;

const styles = StyleSheet.create({
  card: {
    width: 320,
    height: 500,
    borderWidth: 1,
    borderColor: "#93ABB0",
    borderRadius: 25,
    backgroundColor: "#FFF",
    marginBottom: 21,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
});
