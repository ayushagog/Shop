import React, { useContext } from "react";
import {
  FiHome,
  FiShoppingBag,
  FiInfo,
  FiPhone,
  FiSearch,
  FiUser,
  FiShoppingCart,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { context } from "../Store";

const Header = ({ onSearch }) => {
  const{cart} =useContext(context);
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">ShopMate</div>

        {/* Nav Links with Icons */}
        <nav className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="flex items-center gap-1 text-gray-700 hover:text-blue-600"
          >
            <FiHome /> Home
          </Link>
          <Link
            to="#"
            className="flex items-center gap-1 text-gray-700 hover:text-blue-600"
          >
            <FiShoppingBag /> Shop
          </Link>
          <Link
            to="#"
            className="flex items-center gap-1 text-gray-700 hover:text-blue-600"
          >
            <FiInfo /> About
          </Link>
          <Link
            to="#"
            className="flex items-center gap-1 text-gray-700 hover:text-blue-600"
          >
            <FiPhone /> Contact
          </Link>
        </nav>

        {/* Search + Icons */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products"
              className="pl-10 pr-4 py-1.5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => onSearch(e.target.value)}
            />
            <FiSearch className="absolute top-2.5 left-3 text-gray-500" />
          </div>

          <FiUser className="text-2xl text-gray-700 hover:text-blue-600 cursor-pointer" />
          <Link to="/cart">
          <button className="relative">

            <FiShoppingCart className="text-2xl text-gray-700 hover:text-blue-600 cursor-pointer" />
            <span className="absolute top-[-15px] left-[6px] text-xs w-5 h-5 rounded-full flex items-center justify-center text-white bg-red-600">{cart.length}</span>

          </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
