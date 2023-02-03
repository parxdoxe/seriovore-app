import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import theme from '../theme'

const ButtonTransparent = ({btnStyle, onPress, textStyle, text}) => {
  return (
    <TouchableOpacity
      style={{ ...styles.button, ...btnStyle,  }}
      onPress={onPress}
    >
      <Text style={{  ...styles.text, ...textStyle }}>{text}</Text>
    </TouchableOpacity>
  )
}

export default ButtonTransparent

const styles = StyleSheet.create({
    button: {
        backgroundColor: "transparent",
        padding: 10,
        borderWidth: 1,
        borderColor: "#93ABB0",
        borderRadius: 25,
        width: "20%",
        marginRight: 10,
      },
    
      text: {
        fontFamily: theme.fonts.regular,
        color: "#FFF",
        fontSize: 13,
        textAlign: "center"
      },
})