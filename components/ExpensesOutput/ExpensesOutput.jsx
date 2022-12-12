import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { colors } from "../../contants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "New Waterproof Shoes",
    amount: 78.89,
    date: new Date("2022-12-05"),
  },
  {
    id: "e2",
    description: "Great clips haircut",
    amount: 45.93,
    date: new Date("2022-10-09"),
  },
  {
    id: "e3",
    description: "New Winter Jacket",
    amount: 123.34,
    date: new Date("2022-11-12"),
  },
  {
    id: "e4",
    description: "Canon 70-200 f2.8 lense",
    amount: 78.89,
    date: new Date("2022-10-12"),
  },
  {
    id: "e5",
    description: "React Native Books",
    amount: 45.99,
    date: new Date("2022-10-12"),
  },
  {
    id: "e6",
    description: "Great clips haircut",
    amount: 45.93,
    date: new Date("2022-10-09"),
  },
  {
    id: "e7",
    description: "New Winter Jacket",
    amount: 123.34,
    date: new Date("2022-11-12"),
  },
  {
    id: "e8",
    description: "Canon 70-200 f2.8 lense",
    amount: 78.89,
    date: new Date("2022-10-12"),
  },
  {
    id: "e9",
    description: "React Native Books",
    amount: 45.99,
    date: new Date("2022-10-12"),
  },
];

const ExpensesOutput = ({ expenses = DUMMY_EXPENSES, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 0,
    backgroundColor: colors.primary700,
  },
});
