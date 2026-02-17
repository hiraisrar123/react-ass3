import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-3 items-center">

        {/* Left – Logo */}
        <div className="flex justify-start">
          <h1 className="text-xl font-bold text-teal-500">
            circle
          </h1>
        </div>

        {/* Center – Menu */}
        <ul className="hidden md:flex justify-center space-x-8 text-gray-600 font-medium">
          <li className="hover:text-teal-500 cursor-pointer">Features</li>
          <li className="hover:text-teal-500 cursor-pointer">Pricing</li>
          <li className="hover:text-teal-500 cursor-pointer">Testimonials</li>
          <li className="hover:text-teal-500 cursor-pointer">Resources</li>
        </ul>

        {/* Right – Button */}
        <div className="flex justify-end">
          <button className="border border-teal-500 text-teal-500 px-4 py-2 rounded-md hover:bg-teal-500 hover:text-white transition">
            Login
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
