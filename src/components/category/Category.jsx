// category
const category = [
  {
    image: "https://cdn-icons-png.flaticon.com/256/4359/4359963.png",
    name: "fashion",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/11833/11833323.png",
    name: "shirt",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/8174/8174424.png",
    name: "jacket",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/7648/7648246.png",
    name: "mobile",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/12142/12142416.png",
    name: "laptop",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/10686/10686553.png",
    name: "shoes",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/12114/12114279.png",
    name: "home",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/11946/11946316.png",
    name: "books",
  },
];
import React from "react";

const Category = () => {
  return (
    <div className="flex justify-center overflow-x-auto mt-5 scrollbar-hide">
      {category.map((item, index) => (
        <div
          key={index}
          className="flex-shrink-0 flex flex-col items-center mx-4 lg:mx-6"
        >
          <div className="w-20 h-20 lg:w-24 lg:h-24 bg-pink-500 rounded-full overflow-hidden transition-all hover:bg-pink-400 cursor-pointer">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-xs lg:text-sm text-center mt-2 font-medium capitalize">
            {item.name}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Category;
