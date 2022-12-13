import { createContext, useReducer } from "react";

const data = [
  {
    id: "e1",
    description: "New Waterproof Shoes",
    amount: 78.89,
    date: new Date("2022-12-12"),
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
];

export const ExpensesContext = createContext({
  state: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expsesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = newDate().toString + Math.random().toString();
      return [{ ...action.payload, id }, ...state];
    case "DELETE":
      const expenseItemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      const expenseData = state[expenseItemIndex];
      const updateItem = { ...expenseData, ...action.payload.data };
      const readyState = [...state];
      readyState[expenseItemIndex] = updateItem;
      return readyState;
    case "UPDATE":
      return state.filter((exp) => exp.id !== action.payload.id);
    default:
      return state;
  }
}

function ExpenseContextProvider({ children }) {
  const [state, dispatch] = useReducer(expsesReducer, data);
  function addExpense(expeseData) {
    dispatch({ type: "ADD", paload: expeseData });
  }
  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }
  function updateExpense(id, expeseData) {
    dispatch({ type: "UPDATE", payload: { id, data: expeseData } });
  }

  const value = {
    state,
    addExpense,
    deleteExpense,
    updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpenseContextProvider;
