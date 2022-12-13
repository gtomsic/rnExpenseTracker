import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import IconButton from "../UI/IconButton";

import { colors } from "../contants/styles";
import Button from "../UI/Button";

const ManageExpense = ({ route, navigation }) => {
  const expenseId = route.params?.expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: !!expenseId ? "Edit Expense" : "Add Expense",
    });
  }, [expenseId, navigation]);

  function deleteExpenseHandler() {
    console.log(expenseId);
    navigation.goBack();
  }
  function cancelHandler() {
    navigation.goBack();
  }
  function confirmedHandler() {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <View style={styles.buttonGroup}>
        <Button mode="flat" onPress={cancelHandler} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={confirmedHandler} style={styles.button}>
          {expenseId ? "Update" : "Add"}
        </Button>
      </View>
      {expenseId && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: colors.primary700 },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: colors.primary200,
    alignItems: "center",
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
  buttonGroup: {
    flexDirection: "row",
  },
});
