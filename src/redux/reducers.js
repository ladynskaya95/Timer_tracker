import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { addCounter, deleteCounter, updateCounter } from "./actions";

const initialState = [
  {
    id: "SjzHTRNl1TXmo7UwnO1ZG",
    name: "first timer",
    time: {
      seconds: 41,
    },
    isRunning: false,
    date: 1657286883.312,
    i: 6
  },
  {
    id: "SjzHTRNl1TXmo7UwnO1ZG",
    name: "08/07/2022 16:29:51",
    time: {
      seconds: 0,
    },
    isRunning: false,
    date: 1657286883.312,
    i: 7
  },
];

const counters = createReducer(initialState, {
  [addCounter]: (state, { payload }) => [payload, ...state],
  [deleteCounter]: (state, { payload }) =>
    state.filter((item) => item.id !== payload),
  [updateCounter]: (state, { payload }) =>
    state.map((item) => {
      if (item.id === payload.id) {
        item = { ...payload };
      }
      return item;
    }),
});

export default combineReducers({ counters });
