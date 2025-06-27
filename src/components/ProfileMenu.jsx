import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Profile Icon */}
      <div
        className="bg-gray-900 text-white w-8 h-8 flex items-center justify-center rounded-full cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        JP
      </div>

      

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 text-gray-700 z-50">
          <NavLink
            to="/login"
            className="block px-4 py-2 hover:bg-gray-100 transition"
            onClick={() => setIsOpen(false)}
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="block px-4 py-2 hover:bg-gray-100 transition"
            onClick={() => setIsOpen(false)}
          >
            Register
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
