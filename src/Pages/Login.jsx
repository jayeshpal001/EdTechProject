import React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';

function Login() {


  // const [fname, setFname] = useState("RAM")Add commentMore actions
    // const [lname, setLname] = useState("syam")
    // const [email, setEmail] = useState("abc@gmail.com")
    // const [password, setPassword] = useState("RAM")

    // function formData(event) {
    //     event.preventDefault();
    //     console.log(fname, lname, email, password)
    // }

    // function fixLastNameValue(event) {
    //     setLname(event.target.value);
    // }

    // basically react form uncontrolled hote hai




    // ye hoti hai good practice 
    const [formValaData, setFormValaData] = useState({
        fname: "",
        lname: "",
        email: "",
        password: ""

    })

    // normal way when you have any value inside input feild
    // function formKiValue(event){
    //     event.preventDefault();
    //     console.log(formValaData)
    // }

    // when your form dont have any value inside input box


    function formVALEObjectmeValueDalRheHai(event) {
        setFormValaData((pahleValaData) => {
            return {
                ...pahleValaData, [event.target.name]: event.target.value
            }
        })
    }

    function formKiValue1koPrintKarega(event) {
        event.preventDefault();
        // this is not a valid way 
        console.log("me es data ka use api calling me karunga", formValaData);
    }
console.log(formValaData);


  return (
    <>
     <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
        <form onSubmit={formKiValue1koPrintKarega} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
             type="email" id="email" name="email" value={formValaData.email} onChange={
                            formVALEObjectmeValueDalRheHai }             
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
             type="password" id="pass" name="password" value={formValaData.password} onChange={
                            formVALEObjectmeValueDalRheHai }
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Log In
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account? <Link to="/signup" className="text-blue-600 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>


      


    </>
  )
}

export default Login
