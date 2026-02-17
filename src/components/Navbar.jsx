import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
       {/* Logo */}
        <h1 className="text-xl font-bold text-blue-600">
          BrandName
        </h1>
         {/* Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Features</li>
          <li className="hover:text-blue-600 cursor-pointer">Pricing</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>
        {/* Button */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Sign Up
        </button>
      </div>
    </nav>
  )
}


export default Navbar