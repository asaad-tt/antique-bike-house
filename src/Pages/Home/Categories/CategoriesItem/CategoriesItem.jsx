import React from "react";
import { Link } from "react-router-dom";

const CategoriesItem = ({ category }) => {
  console.log(category);
  const { _id, title, price, condition, img } = category;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} className="h-60 w-full" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Condition: {condition}</p>
          <p className="font-bold">Price Starts: {price}</p>
          <div className="card-actions justify-end">
            <Link to={`/categories/${title}`} className="btn btn-primary">
              Explore All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesItem;
