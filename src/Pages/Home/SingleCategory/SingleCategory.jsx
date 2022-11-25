import React from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal/BookingModal";
import CategoryOptions from "./CategoryOptions";

const SingleCategory = () => {
  const category = useLoaderData();
  console.log(category);

  return (
    <>
      <div className="grid grid-cols-1 gap-10 py-10">
        {category.map((categoryCard) => (
          <CategoryOptions
            key={categoryCard._id}
            categoryCard={categoryCard}
          ></CategoryOptions>
        ))}
      </div>
      <BookingModal></BookingModal>
    </>
  );
};

export default SingleCategory;
