import React from "react";
import { TypeAnimation } from "react-type-animation";
import Scroll from "../Scroll-animation/Scroll";
const Section1 = (props) => {
  return (
    <Scroll name="Section1">
      <div className=" bg-black text-white ">
        <section className="m-4 md:m-8 ">
          <div className="container p-4 mx-auto my-6 space-y-1 text-center">
            <h1 className="text-4xl sm:text-5xl text-white dark:text-white font-extrabold tracking-tight">
              What <span className="text-red-800">You </span> Can{" "}
              <span className="text-red-800">Do </span> Here
            </h1>
            <br />
            <TypeAnimation
              sequence={[
                "Stay informed with DailyFeed, your source for reliable global news.",
                2000,
                "DailyFeed delivers timely news updates on topics that matter most",
                3000,
              ]}
              wrapper="span"
              speed={90}
              style={{
                fontSize: "1em",
                display: "inline-block",

                marginBottom: "10px",
              }}
              repeat={Infinity}
            />
          </div>
          <div className="container grid justify-center gap-4 mx-auto lg:grid-cols-2 xl:grid-cols-4 ">
            <div className="flex flex-col px-8 py-6 transition-transform transform hover:scale-105 hover:border-b-2 hover:border-l-2 ">
              <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font text-red-800 hover:underline ">
                {props.card1}
              </h2>
              <p className="flex-1 mb-4 text-base leading-relaxed text-gray-400">
                {props.para1}
              </p>
              <a
                className="inline-flex items-center space-x-2 text-sm hover:text-red-800 hover:underline transition-colors"
                href="/components"
              >
                <span>Learn More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 text-red-800"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="flex flex-col px-8 py-6 lg:border-none xl:border-solid transition-transform transform hover:scale-105 hover:border-b-2 hover:border-l-2">
              <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font text-red-800 hover:underline">
                {props.card2}
              </h2>
              <p className="flex-1 mb-4 text-base leading-relaxed text-gray-400">
                {props.para2}
              </p>
              <a
                className="inline-flex items-center space-x-2 text-sm hover:text-red-800 hover:underline"
                href="/sections"
              >
                <span>Learn More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 text-red-800"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="flex flex-col px-8 py-6 transition-transform transform hover:scale-105 hover:border-b-2 hover:border-l-2">
              <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font text-red-800 hover:underline">
                {props.card3}
              </h2>
              <p className="flex-1 mb-4 text-base leading-relaxed text-gray-400">
                {props.para3}
              </p>
              <a
                className="inline-flex items-center space-x-2 text-sm hover:text-red-800 hover:underline"
                href="/templates"
              >
                <span>Learn More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 text-red-800"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="flex flex-col px-8 py-6 transition-transform transform hover:scale-105 hover:border-b-2 hover:border-l-2">
              <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font text-red-800 hover:underline">
                {props.card4}
              </h2>
              <p className="flex-1 mb-4 text-base leading-relaxed text-gray-400">
                {props.para4}
              </p>
              <a
                className="inline-flex items-center space-x-2 text-sm hover:text-red-800 hover:underline"
                href="/docs"
              >
                <span>Learn More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 text-red-800"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </Scroll>
  );
};

export default Section1;
