import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/auth.js";
import userSlice from "./slice/user.js";
import { Provider } from "react-redux";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
