import {createSlice} from "@reduxjs/toolkit";

const getInitialState = () => 
    [
      { id: 1, title: "ffffff", time: "0", running: false },
      { id: 2, title: "fff", time: "0", running: false },
      { id: 3, title: "ffffff", time: "0", running: false },
    ];

    const itemSlice = createSlice({
      name: "item",
      initialState: getInitialState(),

      reducers: {
        add(items, action) {
            const item = {
              id: 1 + Math.max(0, ...items.map((item) => item.id)),
              title: action.payload,
              running: true
        }
        items.unshift(item)
      },
      remove(items, action) {
        return items.filter((x) => x.id !== action.payload);
      }, toggleTimer(items, action) {
        const item = items.find((item) => item.id === action.payload)
        if (item) {
            item.running = !item.running
        }
      }
    }});

    export const {add, remove, toggleTimer} = itemSlice.actions;
    export default itemSlice.reducer;