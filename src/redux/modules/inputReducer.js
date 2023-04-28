import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  id: uuidv4(),
  title: "",
  content: "",
  isDone: false,
};

const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    inputChange: (state, action) => {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    },
    resetInputBox: (state, action) => {
      return initialState;
    },
  },
});

export const { inputChange, resetInputBox } = inputSlice.actions;
export default inputSlice.reducer;
