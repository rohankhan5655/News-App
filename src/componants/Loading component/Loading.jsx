// src/Loading.js
import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black ">
      <div className="flex space-x-2">
        <div className="w-4 h-4 rounded-full animate-pulse bg-red-800"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-red-800"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-red-800"></div>
      </div>
    </div>
  );
};

export default Loading;
