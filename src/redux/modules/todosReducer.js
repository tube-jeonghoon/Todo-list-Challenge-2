import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [
  {
    id: uuidv4(),
    title: "제목",
    content: "내용",
    isDone: false,
  },
];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [action.payload, ...state];
    },
    deleteTodo: (state, action) => {
      return state.filter((item) => {
        return item.id !== action.payload;
      });
    },
    doneTodo: (state, action) => {
      return state.map((todo) => {
        if (action.payload === todo.id) {
          return { ...todo, isDone: true };
        } else {
          return todo;
        }
      });
    },
    cancelTodo: (state, action) => {
      return state.map((todo) => {
        if (action.payload === todo.id) {
          return { ...todo, isDone: false };
        } else {
          return todo;
        }
      });
    },
  },
});

export default todosSlice.reducer;
export const { addTodo, deleteTodo, doneTodo, cancelTodo } = todosSlice.actions;
