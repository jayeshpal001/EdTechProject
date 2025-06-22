import { useState } from "react";

function Contact(){
    const[user,setUser] = useState({
        fullName:"",
        email:"",
        message:""
    })
    function setFormData(event){
            setUser((prevData)=>{
                return{ 
                          ...prevData, [event.target.name]: event.target.value
               }     
            })
    }
    function getFormData(e){
         e.preventDefault();
         console.log(user);
    }
    console.log(user);
    return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Us</h2>
        <form onSubmit={getFormData} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={user.fullName}
              onChange={setFormData}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={setFormData}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              rows="4"
              name="message"
              value={user.message}
              onChange={setFormData}
              placeholder="Your message..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
export default Contact;

 

 
