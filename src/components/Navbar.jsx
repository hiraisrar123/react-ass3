import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm relative">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Left Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <li className="hover:text-teal-500 cursor-pointer">Features</li>
          <li className="hover:text-teal-500 cursor-pointer">Pricing</li>
          <li className="hover:text-teal-500 cursor-pointer">Testimonials</li>
          <li className="hover:text-teal-500 cursor-pointer">Resources</li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <span className="text-gray-600 hover:text-teal-500 cursor-pointer">
            Company
          </span>
          <span className="text-gray-600 hover:text-teal-500 cursor-pointer">
            Contact
          </span>
          <button className="border border-teal-500 text-teal-500 px-4 py-2 rounded-md hover:bg-teal-500 hover:text-white transition">
            Login
          </button>
        </div>

      </div>

      {/* Center Logo */}
      <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-teal-500">
        circle
      </h1>
    </nav>
  );
};

export default Navbar;
