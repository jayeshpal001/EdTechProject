import React, { useState } from 'react'
import { Link } from 'react-router-dom';
function SignUp() {

 const[user,setUser] = useState({
  fullName: "",  
  email:"",
  password:"",
  contact:""
 });


  function setFormData(event) {
        setUser((pahleValaData) => {
            return {
                ...pahleValaData, [event.target.name]: event.target.value
            }
        })
    }


 const getFormData = (e)=>{

      e.preventDefault();
      console.log(user)
 }
console.log(user);
  return (
    <>
          <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create an Account</h2>
        <form onSubmit={getFormData}  className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
             value={user.fullName}
             onChange={setFormData}
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={setFormData}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={setFormData}
              placeholder="Create a password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Contact</label>
            <input
              type="password"
              name="contact"
              value={user.contact}
              onChange={setFormData}
              placeholder="Enter Contact Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
    </>
  )
}

export default SignUp
