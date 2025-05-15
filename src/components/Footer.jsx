import React from "react";
import {
  FiHome,
  FiShoppingBag,
  FiInfo,
  FiPhone,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">ShopMate</h2>
          <p className="text-sm">
            Your one-stop shop for fashion, gadgets, and more. Trusted by thousands of happy customers.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
              <FiHome /> Home
            </li>
            <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
              <FiShoppingBag /> Shop
            </li>
            <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
              <FiInfo /> About Us
            </li>
            <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
              <FiPhone /> Contact
            </li>
          </ul>
        </div>

        {/* Contact Info + Socials */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-white">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FiMapPin /> 123 Market St, New Delhi
            </li>
            <li className="flex items-center gap-2">
              <FiMail /> support@shopmate.com
            </li>
            <li className="flex items-center gap-2">
              <FiPhone /> +91 98765 43210
            </li>
          </ul>

          <div className="flex gap-4 mt-4 text-xl text-gray-400">
            <a href="#" className="hover:text-blue-400"><FiFacebook /></a>
            <a href="#" className="hover:text-blue-400"><FiTwitter /></a>
            <a href="#" className="hover:text-blue-400"><FiInstagram /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-8 text-gray-500">
        © {new Date().getFullYear()} ShopMate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
