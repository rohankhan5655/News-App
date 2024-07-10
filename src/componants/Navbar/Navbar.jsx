import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-black shadow dark:bg-black-800">
      <div className="container flex justify-center p-6 mx-auto text-white capitalize dark:text-white-300">
        <NavLink
          to="/News-App/"
          className={`flex items-center text-white border-b-2 mx-2 sm:mx-3 md:mx-4 lg:mx-5 ${
            location.pathname === "/News-App/"
              ? "border-red-500 font-bold"
              : "border-transparent"
          }`}
        >
          Home
        </NavLink>

        <NavLink
          to="/News-App/About"
          className={`flex items-center text-white border-b-2 mx-2 sm:mx-3 md:mx-4 lg:mx-5 ${
            location.pathname === "/News-App/About"
              ? "border-red-500 font-bold"
              : "border-transparent"
          }`}
        >
          About
        </NavLink>

        <NavLink
          to="/News-App/Contact"
          className={`flex items-center text-white border-b-2 mx-2 sm:mx-3 md:mx-4 lg:mx-5 ${
            location.pathname === "/News-App/Contact"
              ? "border-red-500 font-bold"
              : "border-transparent"
          }`}
        >
          Contact
        </NavLink>

        <NavLink
          to="/News-App/News"
          className={`flex items-center text-white border-b-2 mx-2 sm:mx-3 md:mx-4 lg:mx-5 ${
            location.pathname === "/News-App/News"
              ? "border-red-500 font-bold"
              : "border-transparent"
          }`}
        >
          News
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
