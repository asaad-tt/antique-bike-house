import React from "react";

const OrderItems = ({ booking }) => {
  const { image, itemName, price } = booking;
  return (
    <div>
      <div className="card  w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{itemName}</h2>
          <p>price: {price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Pay Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItems;
