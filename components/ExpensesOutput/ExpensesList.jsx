import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpenseItem from "./ExpenseItem";

function RenderExpenseItem({ item }) {
  return <ExpenseItem item={item} />;
}

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={RenderExpenseItem}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ExpensesList;

const styles = StyleSheet.create({});
