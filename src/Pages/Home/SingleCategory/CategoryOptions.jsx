import React, { useContext } from "react";
import { GoVerified } from "react-icons/go";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Context/AuthProvider";

const CategoryOptions = ({ categoryCard, setProduct }) => {
  console.log(categoryCard);
  const { user } = useContext(AuthContext);
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

    isVerified,
  } = categoryCard;

  console.log(isVerified);

  // report to admin

  const handleReportToAdmin = (categoryCard) => {
    const reportData = {
      buyerEmail: user?.email,
      image,
      name,
      sellerName,
      resalePrice,
    };

    fetch("https://antique-bike-house-server.vercel.app/reports", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reportData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Report to Admin");
        }
      });
  };

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
            {isVerified ? (
              <p className="flex  gap-2">
                <span>Seller Name:</span>
                <GoVerified className="text-blue-700"></GoVerified> {sellerName}
              </p>
            ) : (
              <p>Seller Name: {sellerName}</p>
            )}
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
          <label
            onClick={() => handleReportToAdmin(categoryCard)}
            className="btn btn-primary mt-5 ml-5"
          >
            Report to Admin
          </label>
        </div>
      </div>
    </div>
  );
};

export default CategoryOptions;
