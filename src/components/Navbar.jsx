import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import ProfileMenu from "./ProfileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Section */}

        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-black cursor-pointer">
            <NavLink to="/">
              <span className="text-purple-600">U</span>demy
            </NavLink>
          </h1>
          <NavLink
            to="/"
            className="hidden md:block text-gray-700 hover:text-blue-600"
          >
            Explore
          </NavLink>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-4">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search for anything"
              className="bg-transparent outline-none w-full"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-6 text-gray-700">
          <NavLink to="/my-learning" className="hover:text-blue-600">
            My Learning
          </NavLink>

          <FaHeart className="cursor-pointer hover:text-red-500" />
          <NavLink to="/cart">
            {" "}
            <FaShoppingCart className="cursor-pointer hover:text-blue-600" />
          </NavLink>
          {/* <FaBell className="cursor-pointer hover:text-yellow-500" /> */}

          <ProfileMenu />
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-4 pb-2 space-y-2 shadow-sm text-gray-700">
          <NavLink to="/" className="block hover:text-blue-600">
            Explore
          </NavLink>
          {/* <NavLink to="/business" className="block hover:text-blue-600">Udemy Business</NavLink>
          <NavLink to="/teach" className="block hover:text-blue-600">Teach on Udemy</NavLink> */}
          <NavLink to="/my-learning" className="block hover:text-blue-600">
            My Learning
          </NavLink>
          <NavLink to="/login" className="block hover:text-blue-600">
            Login
          </NavLink>
          <NavLink to="/signup" className="block hover:text-blue-600">
            SignUp
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
