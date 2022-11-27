import React from "react";

const CategoryOptions = ({ categoryCard, setProduct }) => {
  console.log(categoryCard);
  const {
    name,
    image,
    originalPrice,
    resalePrice,
    condition,
    purchaseDate,
    location,
    postedTime,
    sellerName,
    description,
  } = categoryCard;
  return (
    <div className="hero py-5 bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={image} alt="" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold mb-5">{name}</h1>
          <div className="text-xl">
            <p>Location: {location}</p>
            <p>Original Price: {originalPrice}</p>
            <p>Resale Price: {resalePrice}</p>
            <p>Purchase Date: {purchaseDate}</p>
            <p>Posted Time: {postedTime}</p>
            <p>Seller Name: {sellerName}</p>
            <p>Condition: {condition}</p>
            <p>Description: {description}</p>
          </div>
          <label
            onClick={() => setProduct(categoryCard)}
            htmlFor="booking-modal"
            className="btn btn-primary mt-5"
          >
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default CategoryOptions;

// {
//   /* <div className="grid grid-cols-2 gap-10">
//   <div className="flex justify-center items-center ml-10">
//     <div>
//       <h1 className="text-3xl font-bold">{name}</h1>
//     </div>
//   </div>
//   <div>
//     <img className="max-w-sm rounded-lg shadow-2xl" src={image} alt="" />
//   </div>
// </div>; */
// }
