import { createSlice } from "@reduxjs/toolkit";

export const todos = createSlice({
  name: "todos",
  initialState: [
    {
      id: 0,
      writer: "",
      title: "",
      body: "",
    },
  ],

  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
    deleteTodo(state, action) {
      let index = state.findIndex((todo) => todo.id === action.payload);
      state.splice(index, 1);
    },
    updateTodo(state, action){
      let  index = state.findIndex((todo) =>  todo.id === action.payload.id);
      state.splice(index, 1, action.payload);
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todos.actions;
export default todos;
