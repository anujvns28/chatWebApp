import axios from "axios";
import { userEndPoints } from "../api";
import { setUserLoading } from "../../slice/user";
import socket from "./socket";

const {
  PROFILE_API,
  SEARCH_USER_API,
  SEND_FRIND_REQUEST_API,
  GET_ALL_NOTIFICATIONS_API,
  ACCEPT_NOTIFICATIONS_API,
} = userEndPoints;

export const fetchMyProfile = async () => {
  let result;
  try {
    const response = await axios({
      method: "POST",
      url: PROFILE_API,
      withCredentials: true,
    });
    result = response.data;

    console.log("sending fraind request api response ...", response);
  } catch (err) {
    console.log("fetching profie api error ...", err);
  }
  return result;
};

export const searchUsers = async (dispatch, inputValue) => {
  let result;
  dispatch(setUserLoading(true));
  try {
    const response = await axios({
      method: "GET",
      url: SEARCH_USER_API + `?name=${inputValue}`,
      withCredentials: true,
    });
    result = response.data;

    console.log("Search user api response ...", response);
  } catch (err) {
    console.log("Search user api error ...", err);
  }
  dispatch(setUserLoading(false));
  return result;
};

export const sendFraindRquest = async (data, dispatch) => {
  dispatch(setUserLoading(true));
  let result;
  try {
    const response = await axios({
      method: "PUT",
      url: SEND_FRIND_REQUEST_API,
      data: { userId: data },
      withCredentials: true,
    });
    result = response.data;

    console.log("sending fraind request api response ...", response);
    if (response) {
      socket.emit("sendRequest", data);
    }
  } catch (err) {
    console.log("sending fraidn requiest api error ...", err);
  }
  dispatch(setUserLoading(false));
  return result;
};

export const fetchAllNotification = async (dispatch) => {
  dispatch(setUserLoading(true));
  let result;
  try {
    const response = await axios({
      method: "GET",
      url: GET_ALL_NOTIFICATIONS_API,
      withCredentials: true,
    });
    result = response.data;

    console.log("Notification api response ...", response);
  } catch (err) {
    console.log("Notification api error ...", err);
  }
  dispatch(setUserLoading(false));
  return result;
};

export const handleRequest = async (dispatch, data) => {
  dispatch(setUserLoading(true));
  let result;
  try {
    const response = await axios({
      method: "PUT",
      url: ACCEPT_NOTIFICATIONS_API,
      data: data,
      withCredentials: true,
    });
    result = response.data;

    console.log("ACcept Notification api response ...", response);
  } catch (err) {
    console.log("Accept Notification api error ...", err);
  }
  dispatch(setUserLoading(false));
  return result;
};
