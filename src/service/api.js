const BASE_URL = "http://localhost:4000/api/v1";

export const authEndPoints = {
  CHECK_USERNAME_API: BASE_URL + "/auth/checkUsernameExist",
  SUGGEST_USERNAME_API: BASE_URL + "/auth/suggestUsername",
  SIGNUP_API: BASE_URL + "/auth/signup/",
  LOGIN_API: BASE_URL + "/auth/login",
  LOGOUT_API: BASE_URL + "/auth/logout",
};

export const userEndPoints = {
  PROFILE_API: BASE_URL + "/user/me",
  SEARCH_USER_API: BASE_URL + "/user/searchUser",
  SEND_FRIND_REQUEST_API: BASE_URL + "/user/sendRequest",
  GET_ALL_NOTIFICATIONS_API: BASE_URL + "/user/allNotifaction",
};