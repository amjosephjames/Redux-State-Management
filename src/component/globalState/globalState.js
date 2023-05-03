import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
};

const reduxState = createSlice({
  name: "second",
  initialState,

  reducers: {
    add: (state) => {
      state.count += 1;
    },
    remove: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { add, remove, reset } = reduxState.actions;

export default reduxState.reducer;
