import { createAction } from "@reduxjs/toolkit";
import { DateTime } from "luxon";
import { nanoid } from "nanoid";

const addCounter = createAction("counter/add", (data) => {
  if (data.length === 0) {
    data = DateTime.now().toFormat("dd/LL/yyyy HH:mm:ss");
  }
  return {
    payload: {
      id: nanoid(),
      name: data,
      time: { seconds: 0 },
      isRunning: true,
      date: DateTime.now().toSeconds(),
    },
  };
});

const deleteCounter = createAction("counter/delete");
const updateCounter = createAction("counter/update");

export { addCounter, deleteCounter, updateCounter };
