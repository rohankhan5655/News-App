import React from "react";
import gif from "./aboutgif.gif";
import Scroll from "../Scroll-animation/Scroll";

const Section3 = (props) => {
  return (
    <Scroll name="Section3">
      <div>
        <section className="py-5 mb-8">
          <div className="container mx-auto sm:px-4">
            <div className="flex flex-wrap gx-4 items-center justify-between">
              <div className="md:w-auto lg:w-2/5 pr-4 pl-4 order-2 md:order-1 transition-transform transform hover:scale-105">
                <div className="mt-5 md:mt-0 ">
                  <span className="text-gray-700">Our Story</span>
                  <h1 className="text-4xl sm:text-5xl text-white font-bold mb-3">
                    <span className="text-red-800 ">About</span> Us
                  </h1>
                  <p className="text-xl font-light hover:no-underline  md: text-gray-400 hover:text-gray-400">
                    {props.para1}
                  </p>
                  <br />
                  <p className="text-xl font-light mb-2 text-gray-400 hover:text-gray-400">
                    {props.para2}
                  </p>

                  <button
                    type="submit"
                    className="bg-red-800 text-white font-bold py-3 px-6 rounded-md mt-3"
                  >
                    Read More
                  </button>
                  <br />
                </div>
              </div>
              <div className="  md:mt-10 flex justify-center pr-4 pl-4 order-1 md:order-2 transition-transform transform hover:scale-105">
                <img
                  className="max-w-full h-auto rounded-3 md:max-w-full"
                  alt="web dev"
                  src={gif}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Scroll>
  );
};

export default Section3;
