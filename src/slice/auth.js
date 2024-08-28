import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "my token",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, value) {
      state.token = value.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setToken } = authSlice.actions;

export default authSlice.reducer;
