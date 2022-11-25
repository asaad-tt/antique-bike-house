import React from "react";

const CategoryOptions = ({ categoryCard }) => {
  const {
    title,
    name,
    img,
    originalPrice,
    resalePrice,
    condition,
    useDuration,
    location,
    postedTime,
    sellersName,
    description,
  } = categoryCard;
  return (
    <div className="grid grid-cols-2 gap-10">
      <div className="flex justify-center items-center ml-10">
        <div>
          <h1 className="text-3xl font-bold">{name}</h1>
          <div className="text-xl">
            <p>Location: {location}</p>
            <p>Original Price: {originalPrice}</p>
            <p>Resale Price: {resalePrice}</p>
            <p>Use Time: {useDuration}</p>
            <p>Posted Time: {postedTime}</p>
            <p>Seller Name: {sellersName}</p>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default CategoryOptions;
