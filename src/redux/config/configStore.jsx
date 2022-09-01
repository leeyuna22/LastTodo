import { configureStore } from "@reduxjs/toolkit";
import commen from "../modules/comments";
import todos from "../modules/todo";

const store = configureStore({
  reducer: {
    todos: todos.reducer,
    commen: commen.reducer
  },
});

export default store;