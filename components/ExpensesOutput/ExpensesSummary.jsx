import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../contants/styles";

const ExpensesSummary = ({ periodName, expenses }) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0); // 0 zero is the starting value of amount to work with reduce
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 14,
    color: colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primary500,
  },
});
