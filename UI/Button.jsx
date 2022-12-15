import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../contants/styles";

const Button = ({ children, onPress, mode, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <View style={[styles.button, mode === "flat" && styles.flat]}>
        <Text style={[styles.text, mode === "flat" && styles.flatText]}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    padding: 8,
    backgroundColor: colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  text: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: "white",
  },
});
