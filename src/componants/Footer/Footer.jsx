import React from "react";
import Scroll from "../Scroll-animation/Scroll";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Scroll name="footer">
      <div>
        <footer className="bg-black w-full shadow-lg ">
          <div className="container mx-auto p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-white sm:text-center">
              © 2024 React News App By{"  "}
              <a
                href="https://www.linkedin.com/in/rohan-gg-505467284/"
                className="hover:underline text-red-500"
                target="_blank"
              >
                M.Rohan khan
              </a>
              . All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
              <li>
                <Link
                  to="/News-App/About"
                  className="flex items-center border-b-2 border-transparent  hover:border-red-500 mx-2 sm:mx-4 md:mx-6"
                >
                  <span className="inline-flex items-center justify-center">
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/News-App/Contact"
                  className="flex items-center border-b-2 border-transparent  hover:border-red-500 mx-2 sm:mx-4 md:mx-6"
                >
                  <span className="inline-flex items-center justify-center">
                    Contact
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/News-App/News"
                  className="flex items-center border-b-2 border-transparent  hover:border-red-500 mx-2 sm:mx-4 md:mx-6"
                >
                  <span className="inline-flex items-center justify-center">
                    News
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </Scroll>
  );
}

export default Footer;
