import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 min-h-screen flex items-center justify-center">
    <div className="sm:w-full w-[90%] max-w-md bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Create Your Account</h2>
      <form >
        <div className='flex sm:flex-row flex-col gap-2'>
        <div className="sm:mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" >First Name</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter your first name"
          />
          {/* {
              errors.firstName && 
              <span className=' text-blue-800'>First Name is required</span>
          } */}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" >Last Name</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter your last name"
           
          />
          {/* {
              errors.lastName && 
              <span className=' text-blue-800'>Last Name is required</span>
          } */}
        </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" >Email</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Enter your email"
            
          />
{/* {
              errors.email && 
              <span className=' text-blue-800'>Email is required</span>
          } */}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" >Password</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Enter your password"
           
          />
          {/* {
              errors.password && 
              <span className=' text-blue-800'>Password is required</span>
          } */}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" >Confirm Password</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Confirm your password"
           
          />
          {/* {
              errors.confirmPassword && 
              <span className=' text-blue-800'>Password is required</span>
          } */}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
          <span
          onClick={() => navigate("/login")}
            className="inline-block align-baseline cursor-pointer font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            Already have an account?
          </span>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Signup
