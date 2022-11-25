import React from "react";
import { useLoaderData } from "react-router-dom";
import CategoryOptions from "./CategoryOptions";

const SingleCategory = () => {
  const category = useLoaderData();
  console.log(category);

  return (
    <div className="grid grid-cols-1 ">
      {category.map((categoryCard) => (
        <CategoryOptions
          key={categoryCard._id}
          categoryCard={categoryCard}
        ></CategoryOptions>
      ))}
    </div>
  );
};

export default SingleCategory;
