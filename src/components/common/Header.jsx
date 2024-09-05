import React from "react";
import { MdLogout } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { FaUserGroup } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { logout } from "../../service/operation/auth";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  //logout function
  const handleLogout = async () => {
    await logout(dispatch);
  };

  return (
    <div className="w-full ">
      <div className="w-full h-[4rem] flex justify-between  bg-pink-500 py-3 px-5 ">
        <div className="flex items-center justify-center text-2xl font-semibold text-white">
          let'sChat
        </div>
        <div className="flex flex-row gap-5 items-center text-xl font-semibold text-white">
          <div className="cursor-pointer">
            <IoMdSearch />
          </div>
          <div className="cursor-pointer">
            <FaPlus />
          </div>
          <div className="cursor-pointer">
            <FaUserGroup />
          </div>
          <div className="cursor-pointer">
            <IoIosNotifications />
          </div>
          <div onClick={handleLogout} className="cursor-pointer">
            <MdLogout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
