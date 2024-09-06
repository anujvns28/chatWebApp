import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoading(state, value) {
      state.userLoading = value.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserLoading } = userSlice.actions;

export default userSlice.reducer;
