const BASE_URL = "http://localhost:4000/api/v1";

export const authEndPoints = {
  CHECK_USERNAME_API: BASE_URL + "/user/checkUsernameExist",
  SUGGEST_USERNAME_API: BASE_URL + "/user/suggestUsername",
  SIGNUP_API: BASE_URL + "/auth/signup/",
  LOGIN_API: BASE_URL + "/auth/login",
};
