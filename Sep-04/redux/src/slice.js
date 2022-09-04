import { createSlice } from "@reduxjs/toolkit";

const defaultSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    abcd: "Something",
    another: "Something else"
  },
  reducers: {
    like: (state) => {
      state.value = state.value + 1;
    },
    dislike: () => {}
  }
});

export { defaultSlice };

export const { like, dislike } = defaultSlice.actions;