import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "my token",
  auhtLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, value) {
      state.token = value.payload;
    },
    setAuthLoading(state, value) {
      state.auhtLoading = value.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setToken, setAuthLoading } = authSlice.actions;

export default authSlice.reducer;
