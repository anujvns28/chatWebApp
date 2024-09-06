import React, { useEffect, useState, useRef } from "react";
import { searchUsers, sendFraindRquest } from "../../../service/operation/user";
import { useDispatch, useSelector } from "react-redux";
import { LuPlus } from "react-icons/lu";

const searchModal = ({ setShowSearchModal, showSearchModal }) => {
  const [allUsers, setAllUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [debounceValue, setDebouncedValue] = useState("");
  const dispatch = useDispatch();
  const { userLoading } = useSelector((state) => state.user);

  const modalRef = useRef(null);

  // search user
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  const fetchAllUser = async () => {
    const result = await searchUsers(dispatch, debounceValue);
    if (result) {
      setAllUsers(result.users);
    }
  };

  useEffect(() => {
    fetchAllUser();
  }, [debounceValue]);

  // outside click close search box
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowSearchModal(false);
    }
  };

  useEffect(() => {
    if (showSearchModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [showSearchModal]);

  // send fraind request

  const handleSendFraindRquest = async (userId) => {
    await sendFraindRquest(userId, dispatch);
  };

  return (
    <div className=" fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm  top">
      <div
        ref={modalRef}
        className="w-11/12 bg-white fixed overflow-y-auto max-h-[90vh] max-w-[350px] rounded-lg border border-richblack-400 bg-richblack-800 p-3 flex flex-col "
      >
        <p className="font-semibold pt-4">Find Pepole</p>
        <input
          placeholder="Enter name"
          onChange={(e) => setInputValue(e.target.value)}
          className="py-1 px-3 w-[90%]  mt-3 focus:outline-none border border-black"
        />
        <div className="p-7 w-full">
          {userLoading ? (
            <div className="">
              <div className="custom-loader"></div>
            </div>
          ) : (
            <div className="w-full flex flex-col gap-2 ">
              {allUsers.length == 0 ? (
                <div>
                  <p>No user found</p>
                </div>
              ) : (
                allUsers.map((user, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-row items-center justify-between "
                    >
                      <div className="flex flex-row gap-3  ">
                        <img
                          className="w-[30px] border object-contain h-[30px] rounded-full "
                          src={user.avatar}
                        />
                        <p>{user.name}</p>
                      </div>
                      <div
                        onClick={() => handleSendFraindRquest(user._id)}
                        className="w-[30px] cursor-pointer h-[30px] rounded-full flex items-center justify-center bg-blue-700 text-white"
                      >
                        <LuPlus />
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default searchModal;
