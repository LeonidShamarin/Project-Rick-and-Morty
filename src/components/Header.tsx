import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/Rick_and_Morty_logo.png";

const Header: React.FC = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between  h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 ">
              <img className="h-8 w-30 " src={logo} alt="Logo" />
            </div>
            <div className="ml-10 flex space-x-4 md:ml-80  lg:ml-96 ">
              <Link
                to="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Episodes
              </Link>
              <Link
                to="/characters"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Characters
              </Link>
              <Link
                to="/locations"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Locations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
