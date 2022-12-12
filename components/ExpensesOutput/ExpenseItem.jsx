import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { colors } from "../../contants/styles";
import { getFormatedDate } from "../../utils/date";

const ExpenseItem = ({ item }) => {
  const { navigate } = useNavigation();
  function expressPressHandler() {
    navigate("ManageExpense");
  }
  return (
    <TouchableOpacity onPress={expressPressHandler}>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {item?.description}
          </Text>
          <Text style={styles.textBase}>{getFormatedDate(item.date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{item?.amount.toFixed(2)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
    elevation: 3,
    shadowColor: colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  amount: {
    color: colors.primary500,
    fontWeight: "bold",
    minWidth: 60,
    textAlign: "center",
  },
});
