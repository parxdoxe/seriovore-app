import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import theme from "../theme";

const CustomBtn = ({ btnStyle, text, textStyle, onPress }) => {
  return (
    <TouchableOpacity
      style={{ ...btnStyle, ...styles.button }}
      onPress={onPress}
    >
      <Text style={{ ...textStyle, ...styles.text }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "transparent",
    padding: 15,
    borderWidth: 1,
    borderColor: "#93ABB0",
    borderRadius: 25,
  },

  text: {
    fontFamily: theme.fonts.bold,
    color: "#FFF",
    fontSize: 20,
  },
});
