import axios from "axios";
import { setAuthLoading, setUser } from "../../slice/auth";
import { authEndPoints } from "../api";

const {
  CHECK_USERNAME_API,
  LOGIN_API,
  SIGNUP_API,
  SUGGEST_USERNAME_API,
  LOGOUT_API,
} = authEndPoints;

export const checkUserNameExist = async (data) => {
  let result;
  try {
    const response = await axios({
      method: "POST",
      url: CHECK_USERNAME_API,
      data: { username: data },
    });
    result = response.data;

    console.log("checq username unique response", response);
  } catch (err) {
    console.log("checq username unique Api error....", err);
  }
  return result;
};

export const suggestUsername = async (data) => {
  let result;
  try {
    const response = await axios({
      method: "POST",
      url: SUGGEST_USERNAME_API,
      data: { email: data },
    });
    result = response.data;

    console.log("suggest response", response);
  } catch (err) {
    console.log("suggest username Api error....", err);
  }
  return result;
};

export const signup = async (data, dispatch, navigate) => {
  dispatch(setAuthLoading(true));
  try {
    const response = await axios({
      method: "POST",
      url: SIGNUP_API,
      data: data,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response) {
      localStorage.setItem("user", JSON.stringify(response.data.user));
      dispatch(setUser(response.data.user));
      navigate("/");
    }

    console.log("signup response....", response);
  } catch (err) {
    console.log("signup Api error....", err);
  }
  dispatch(setAuthLoading(false));
};

export const login = async (data, dispatch, navigate) => {
  dispatch(setAuthLoading(true));
  try {
    const response = await axios({
      method: "POST",
      url: LOGIN_API,
      data: data,
      withCredentials: true,
    });

    if (response) {
      localStorage.setItem("user", JSON.stringify(response.data.user));
      dispatch(setUser(response.data.user));
      navigate("/");
    }

    console.log("login response....", response);
  } catch (err) {
    console.log("login Api error....", err);
  }
  dispatch(setAuthLoading(false));
};

export const logout = async (dispatch) => {
  dispatch(setAuthLoading(true));
  try {
    const response = await axios({
      method: "GET",
      url: LOGOUT_API,
      withCredentials: true,
    });

    if (response) {
      localStorage.clear();
      dispatch(setUser(null));
    }

    console.log("Logout response....", response);
  } catch (err) {
    console.log("Logut Api error....", err);
  }
  dispatch(setAuthLoading(false));
};


