import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store";
import { getDateMinusDays } from "../utils/date";

const RecentExpense = () => {
  const expenseCtx = useContext(ExpensesContext);
  const recentExpenses = expenseCtx.state?.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo;
  });

  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 Days" />
  );
};

export default RecentExpense;

const styles = StyleSheet.create({});
