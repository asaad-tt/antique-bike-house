import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../../Loading/Loading";

const OrderItems = ({ booking }) => {
  const { image, itemName, price, _id } = booking;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="card  w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{itemName}</h2>
            <p>price: {price}</p>
            <div className="card-actions justify-end">
              {price && !booking.paid && (
                <Link to={`/dashboard/payment/${_id}`}>
                  <button className="btn btn-primary">Pay Now</button>
                </Link>
              )}
              {price && booking.paid && (
                <button className="btn btn-danger">Paid</button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderItems;
