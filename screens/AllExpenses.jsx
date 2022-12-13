import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store";

const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  return <ExpensesOutput expensesPeriod="Total" expenses={expensesCtx.state} />;
};

export default AllExpenses;

const styles = StyleSheet.create({});
