import axios from "axios";
import { userEndPoints } from "../api";

const { PROFILE_API } = userEndPoints;

export const fetchMyProfile = async () => {
  let result;
  try {
    const response = await axios({
      method: "POST",
      url: PROFILE_API,
      withCredentials: true,
    });
    result = response.data;

    console.log("fetcing profile api response ...", response);
  } catch (err) {
    console.log("fetching profie api error ...", err);
  }
  return result;
};
