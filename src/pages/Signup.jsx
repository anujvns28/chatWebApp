import React, { useRef, useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  checkUserNameExist,
  signup,
  suggestUsername,
} from "../service/operation/auth";
import { useDispatch } from "react-redux";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm();
  const [avatarUrl, setAvatarUrl] = useState();
  const [avatarError, setAvatarError] = useState(false);
  const [email, setEmail] = useState();
  const [suggestname, setSuggestname] = useState();
  const [username, setusername] = useState();
  const [isUniqueUsername, setIsUniqueUsername] = useState(false);

  const handleChange = (e) => {
    const file = e.target.files[0];
    const fileUrl = URL.createObjectURL(file);
    setAvatarUrl(fileUrl);
    setValue("avatar", file);
  };

  // suggest username
  const handleEmailBlur = async () => {
    if (email && email.includes("@gmail.com")) {
      const result = await suggestUsername(email);
      if (result) {
        setSuggestname(result.data);
      }
    }
  };

  // check username vallied
  const handleUsernameBlur = async () => {
    console.log(username, "this is username");

    const result = await checkUserNameExist(username);
    if (result) {
      console.log(result);
    }
  };

  const handleForm = async (data) => {
    if (!data.avatar) setAvatarError(true);

    await signup(data, dispatch);
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-3">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit(handleForm)}>
          <div className="mb-2 ">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Profile Image
            </label>
            <div className="w-full flex items-center justify-center">
              <label className="cursor-pointer rounded-full h-[120px] w-[120px] flex justify-center items-center border border-gray-300  shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                {!avatarUrl ? (
                  <p className="text-9xl">
                    <FaCircleUser />
                  </p>
                ) : (
                  <img
                    src={avatarUrl}
                    className="w-full h-full object-cover rounded-full"
                  />
                )}
                <input type="file" className="hidden" onChange={handleChange} />
              </label>
            </div>
            {avatarError && (
              <div>
                <span className=" text-blue-800 text-xs">
                  avatar is required
                </span>
              </div>
            )}
          </div>

          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <div>
                <span className=" text-blue-800 text-xs">name is required</span>
              </div>
            )}
          </div>

          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your name"
              {...register("email", { required: true })}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={handleEmailBlur}
            />
            {errors.email && (
              <div>
                <span className=" text-blue-800 text-xs">
                  Email is required
                </span>
              </div>
            )}
          </div>

          <div className="mb-2 relative">
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your name"
              {...register("username", { required: true })}
              onChange={(e) => setusername(e.target.value)}
              onBlur={handleUsernameBlur}
            />
            {errors.username && (
              <div>
                <span className=" text-blue-800 text-xs">
                  Username is required
                </span>
              </div>
            )}
            {isUniqueUsername && (
              <div className="absolute top-9 right-4">
                <span
                  className={`${
                    isUniqueUsername ? "text-red-500" : "text-green-500"
                  } text-xs`}
                >
                  Username is {isUniqueUsername ? "not vallied" : "vallied"}
                </span>
              </div>
            )}
          </div>
          {/* suggest username section */}
          {suggestname && (
            <div className="flex justify-between w-[95%] items-center gap-1 text-xs">
              {suggestname.map((name, index) => {
                return (
                  <div
                    onClick={() => setusername(name)}
                    key={index}
                    className="border bg-gray-200 cursor-pointer px-3 py-1 rounded-md"
                  >
                    <p>{name}</p>
                  </div>
                );
              })}
            </div>
          )}

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <div>
                <span className=" text-blue-800 text-xs">
                  Password is required
                </span>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-700">
            Already have an account?
            <span
              onClick={() => navigate("/login")}
              className="text-blue-500 hover:text-blue-800 font-bold cursor-pointer"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
