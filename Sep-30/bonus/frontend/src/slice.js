import { createSlice, configureStore } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "default",
  initialState: {
    user: {}
  },
  reducers: {
    login: (state, data) => {
      state.user = data.payload;
    },
    logout: state => {
      state.user = {}
    }
  }
})

const store = configureStore({
  reducer: slice.reducer
});

export const { login, logout } = slice.actions;
export default store;