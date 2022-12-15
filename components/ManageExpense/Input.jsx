import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { colors } from "../../contants/styles";

const Input = ({ label, textInputConfig }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...textInputConfig} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    marginVertical: 10,
  },
  label: {
    fontSize: 14,
    color: colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: "white",
    color: colors.primary700,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    fontSize: 16,
  },
});
