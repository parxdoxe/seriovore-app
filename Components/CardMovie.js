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
    position: 'absolute',
    width: 320,
    height: 500,
    borderRadius: 25,
    borderColor: "#93ABB0",
    borderWidth: 1,
    resizeMode: 'cover',
  },
  image: {
    width: 320,
    height: "100%",
    borderRadius: 25,
    resizeMode: 'cover',
  },
});
