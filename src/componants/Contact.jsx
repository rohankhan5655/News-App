import React from "react";
import Scroll from "./Scroll-animation/Scroll";
const Contact = (props) => {
  return (
    <>
      <Scroll name="contact">
        <div className=" bg-black  sm:pt-0 ">
          <div className=" container	mx-auto sm:px-7 lg:px-8">
            <div className="mt-8 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2">
                <div className="p-6 mr-2  sm:rounded-lg">
                  <h1 className="text-4xl sm:text-5xl text-white  font-extrabold tracking-tight">
                    Get in <span className="text-red-800">touch </span>
                  </h1>
                  <p className="text-normal text-lg sm:text-2xl font-medium  text-gray-400 mt-2">
                    {props.para}
                  </p>

                  <div className="flex items-center mt-8 text-gray-600 text-gray-400 transition-transform transform hover:scale-105">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-red-700 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div className="ml-4 text-md tracking-wide font-semibold w-40 text-gray-400">
                      {props.address}
                    </div>
                  </div>

                  <div className="flex items-center mt-4 text-gray-600 transition-transform transform hover:scale-105">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-red-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div className="ml-4 text-md tracking-wide font-semibold w-40 text-gray-400">
                      {props.ph}
                    </div>
                  </div>

                  <div className="flex items-center mt-2 text-gray-400 transition-transform transform hover:scale-105 ">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-red-700 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div className="ml-4 text-md tracking-wide font-semibold w-40 text-gray-400 ">
                      {props.exgmail}
                    </div>
                  </div>
                </div>

                <form className="p-6 flex flex-col justify-center">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="hidden">
                      Full Name
                    </label>
                    <input
                      type="name"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col mt-2">
                    <label htmlFor="email" className="hidden">
                      Emai
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col mt-2">
                    <label htmlFor="tel" className="hidden">
                      Number
                    </label>
                    <input
                      type="tel"
                      name="tel"
                      id="tel"
                      placeholder="Telephone Number"
                      className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="md:w-32 bg-red-800  text-white font-bold py-3 px-6 rounded-lg mt-3 h transition ease-in-out duration-300"
                  >
                    {props.button}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <br />
      </Scroll>
    </>
  );
};

export default Contact;
