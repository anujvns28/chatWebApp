import React from "react";
import { MdLogout } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { FaUserGroup } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";

const Header = () => {
  return (
    <div className="w-full ">
      <div className="w-full h-[4rem] flex justify-between  bg-pink-500 py-3 px-5 ">
        <div className="flex items-center justify-center text-2xl font-semibold text-white">
          let'sChat
        </div>
        <div className="flex flex-row gap-5 items-center text-xl font-semibold text-white">
          <div>
            <IoMdSearch />
          </div>
          <div>
            <FaPlus />
          </div>
          <div>
            <FaUserGroup />
          </div>
          <div>
            <IoIosNotifications />
          </div>
          <div>
            <MdLogout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
