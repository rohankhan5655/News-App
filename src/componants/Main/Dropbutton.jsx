import React, { useState, useEffect } from "react";

const Dropbutton = ({ setCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(
    localStorage.getItem("selectedCategory") || "business"
  );

  useEffect(() => {
    localStorage.setItem("selectedCategory", selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCategory(category);
  };

  return (
    <div className="flex flex-wrap items-center mx-auto mb-4">
      <p className="mb-2 mx-5 text-lg font-medium">
        {" "}
        <span className="text-red-700">Select</span> Categories :-
      </p>
      <div className="flex flex-wrap justify-center">
        {["business", "entertainment", "health", "technology"].map(
          (category) => (
            <div
              key={category}
              className="flex mr-2 mx-2 items-center transition-transform transform hover:scale-105"
            >
              <input
                id={category}
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={() => handleCategoryChange(category)}
                className="w-4 h-4 mx-2 mr-2 bg-red-100 border-red-300 focus:ring-red-500"
                style={{
                  accentColor: "red",
                  borderColor: "red",
                }}
              />
              <label htmlFor={category} className="ml-2 text-sm font-medium">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </label>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Dropbutton;
