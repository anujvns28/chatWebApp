import React, { useEffect } from "react";
import { fetchAllNotification } from "../../../service/operation/user";
import { useDispatch, useSelector } from "react-redux";

const Notification = () => {
  const dispatch = useDispatch();
  const { userLoading } = useSelector((state) => state.user);

  const getNotifcation = async () => {
    await fetchAllNotification(dispatch);
  };

  useEffect(() => {
    getNotifcation();
  }, []);

  return (
    <div className=" fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm  top">
      <div className="w-11/12 bg-white fixed overflow-y-auto max-h-[90vh] max-w-[350px] rounded-lg border border-richblack-400 bg-richblack-800 p-3 flex flex-col ">
        <div className="flex flex-col items-center">
          <p>Notifactions</p>
          <div className="p-7 w-full justify-center">
            {userLoading ? (
              <div className="">
                <div className="custom-loader"></div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
