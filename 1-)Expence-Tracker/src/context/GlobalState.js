import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// İnitial State
const initialState = {
  transactions: [],
};
// Create Context
export const GlobalContext = createContext(initialState);

// Provider

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  //deleteTransaction
  function deleteTransaction(id) {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  }
  //addTransaction
  function addTransaction(transaction) {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
