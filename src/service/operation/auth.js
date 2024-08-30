import axios from "axios";
import { setAuthLoading } from "../../slice/auth";
import { authEndPoints } from "../api";
import { apiConnector } from "../apiconnector";

const { CHECK_USERNAME_API, LOGIN_API, SIGNUP_API, SUGGEST_USERNAME_API } =
  authEndPoints;

export const checkUserNameExist = async (data) => {
  let result;
  try {
    const response = await apiConnector("POST", CHECK_USERNAME_API, {
      username: data,
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
    const response = await apiConnector("POST", SUGGEST_USERNAME_API, {
      email: data,
    });
    result = response.data;

    console.log("suggest response", response);
  } catch (err) {
    console.log("suggest username Api error....", err);
  }
  return result;
};

export const signup = async (data, dispatch) => {
  dispatch(setAuthLoading(true));
  try {
    const response = await apiConnector("POST", SIGNUP_API, data, {
      "Content-Type": "multipart/form-data",
    });

    console.log("signup response....", response);
  } catch (err) {
    console.log("signup Api error....", err);
  }
  dispatch(setAuthLoading(false));
};

export const login = async (data, dispatch) => {
  dispatch(setAuthLoading(true));
  try {
    const response = await axios({
      method: "POST",
      url: LOGIN_API,
      data: data,
      withCredentials: true,
    });

    console.log("login response....", response);
  } catch (err) {
    console.log("login Api error....", err);
  }
  dispatch(setAuthLoading(false));
};
