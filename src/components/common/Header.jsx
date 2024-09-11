import React, { useEffect, useRef, useState } from "react";
import { FaPlus, FaUserGroup } from "react-icons/fa6";
import { IoIosNotifications, IoMdSearch } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { useDispatch } from "react-redux";
import { logout } from "../../service/operation/auth";
import SearchModal from "../core/notification/SearchModal";
import Notification from "../core/notification/Notification";
import { fetchAllNotification } from "../../service/operation/user";
import socket from "../../service/operation/socket";

const Header = () => {
  const dispatch = useDispatch();

  const [showNotification, setShowNotification] = useState(false);
  const [notification, setNotifaction] = useState(0);
  const [showSearchModal, setShowSearchModal] = useState(false);

  //logout function
  const handleLogout = async () => {
    await logout(dispatch);
  };

  // handle notifications
  const handleNotifications = async () => {
    const result = await fetchAllNotification(dispatch);
    if (result) {
      setNotifaction(result.allRequest.length);
    }
  };

  socket.on("requestNotification", (data) => {
    let count = notification;
    count++;
    setNotifaction(count);
    console.log(data);
  });

  useEffect(() => {
    handleNotifications();
  }, [showNotification]);

  return (
    <div className="w-full ">
      <div className="w-full h-[4rem] flex justify-between  bg-pink-500 py-3 px-5 ">
        <div className="flex items-center justify-center text-2xl font-semibold text-white">
          let'sChat
        </div>
        <div className="flex flex-row gap-5 items-center text-xl font-semibold text-white">
          <div
            onClick={() => setShowSearchModal(true)}
            className="cursor-pointer"
          >
            <IoMdSearch />
          </div>
          <div className="cursor-pointer">
            <FaPlus />
          </div>
          <div className="cursor-pointer">
            <FaUserGroup />
          </div>
          <div
            onClick={() => setShowNotification(true)}
            className="cursor-pointer relative"
          >
            <IoIosNotifications />
            {/* notification count*/}
            {notification > 0 && (
              <div className="absolute  -top-2 -right-1">
                <div className="bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {notification}
                </div>
              </div>
            )}
          </div>
          <div onClick={handleLogout} className="cursor-pointer">
            <MdLogout />
          </div>
        </div>
      </div>
      {showSearchModal && (
        <div>
          <SearchModal
            setShowSearchModal={setShowSearchModal}
            showSearchModal={showSearchModal}
          />
        </div>
      )}

      {showNotification && (
        <Notification
          setShowNotification={setShowNotification}
          showNotification={showNotification}
        />
      )}
    </div>
  );
};

export default Header;
