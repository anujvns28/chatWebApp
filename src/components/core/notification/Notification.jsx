import React, { useEffect, useRef, useState } from "react";
import {
  fetchAllNotification,
  handleRequest,
} from "../../../service/operation/user";
import { useDispatch, useSelector } from "react-redux";

const Notification = ({ setShowNotification, showNotification }) => {
  const dispatch = useDispatch();
  const { userLoading } = useSelector((state) => state.user);
  const notiRef = useRef(null);
  const [requests, setRequests] = useState([]);

  const getNotifcation = async () => {
    const result = await fetchAllNotification(dispatch);
    if (result) {
      setRequests(result.allRequest);
    }
  };

  const handleOutSideClick = (e) => {
    if (notiRef.current && !notiRef.current.contains(e.target)) {
      setShowNotification(false);
    }
  };

  const handleRequestFunction = async (id, status) => {
    const data = { requestId: id, accept: status };
    await handleRequest(dispatch, data);
    getNotifcation();
  };

  useEffect(() => {
    if (showNotification) {
      document.addEventListener("mousedown", handleOutSideClick);
    } else {
      document.removeEventListener("mousedown", handleOutSideClick);
    }
  }, [showNotification]);

  useEffect(() => {
    getNotifcation();
  }, []);

  console.log(requests);

  return (
    <div className=" fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm  top">
      <div
        ref={notiRef}
        className="w-11/12 bg-white fixed overflow-y-auto max-h-[90vh] max-w-[450px] rounded-lg border border-richblack-400 bg-richblack-800 p-3 flex flex-col "
      >
        <div className="flex flex-col items-center">
          <p>Notifactions</p>
          <div className="p-7 w-full justify-center">
            {userLoading ? (
              <div className="w-full h-full flex items-center justify-center">
                <div className="custom-loader"></div>
              </div>
            ) : (
              <div>
                {requests.length == 0 ? (
                  <div>
                    <p className="text-center">No Reuquest Found</p>
                  </div>
                ) : (
                  <div className="">
                    {requests.map((item) => (
                      <div
                        key={item._id}
                        className="flex flex-row items-center p-4 justify-between bg-gray-100 rounded-lg shadow-md mb-3"
                      >
                        <div className="flex items-center space-x-3">
                          <img
                            className="rounded-full w-[50px] h-[50px] object-cover"
                            src={item.sender.avatar}
                            alt={`${item.sender.name}'s avatar`}
                          />
                          <p className="font-medium text-lg">
                            {item.sender.name}
                          </p>
                        </div>
                        <div className="flex flex-row gap-2">
                          <button
                            onClick={() =>
                              handleRequestFunction(item._id, true)
                            }
                            className="px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                          >
                            Accept
                          </button>
                          <button
                            onClick={() =>
                              handleRequestFunction(item._id, false)
                            }
                            className="px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                          >
                            Reject
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
