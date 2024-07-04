import React from "react";

import Scroll from "../Scroll-animation/Scroll";

const Card = ({ title, desc, imageUrl, url }) => {
  return (
    <Scroll name="card">
      <div className="flex items-center justify-center transition-transform transform hover:scale-105 ">
        <div className="w-60 h-80 bg-gray-900 rounded-3xl text-neutral-300 p-4 flex flex-col gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-red-600 transition-shadow ">
          <div className="w-full h-[20vh] bg-red-800 rounded-2xl ">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                No Image
              </div>
            )}
          </div>
          <div className="flex flex-col flex-1 overflow-hidden">
            <p className="font-extrabold text-sm">{title}...</p>
            <p className="text-sm">{desc}...</p>
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-800 text-white font-extrabold py-2 px-6 rounded-xl hover:bg-red-600 transition-colors text-center"
          >
            Read More
          </a>
        </div>
      </div>
    </Scroll>
  );
};

export default Card;
