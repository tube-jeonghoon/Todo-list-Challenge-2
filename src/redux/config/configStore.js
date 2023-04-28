import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../modules/todosReducer";
import inputReducer from "../modules/inputReducer";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    input: inputReducer,
  },
});

export default store;
