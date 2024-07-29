import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();
    
  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 min-h-screen flex items-center justify-center">
   <div className="sm:w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Login to Your Account</h2>
        <form >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
            />
            {/* {
                errors.email && 
                <span className=' text-blue-800'>Email is required</span>
            } */}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Enter your password"
             
            />
            {/* {
                errors.password && 
                <span className='text-blue-800'>Password is required</span>
            } */}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <span
              className="inline-block cursor-pointer align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Forgot Password?
            </span>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-700">Don't have an account?
             <span onClick={()=> navigate("/signup")}
              className="text-blue-500 hover:text-blue-800 font-bold cursor-pointer">Sign up</span>
            </p>
          </div>
        </form>
      </div>
</div>
  )
}

export default Login
