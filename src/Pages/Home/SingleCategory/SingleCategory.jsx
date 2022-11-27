import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Loading from "../../Loading/Loading";
import BookingModal from "./BookingModal/BookingModal";
import CategoryOptions from "./CategoryOptions";

const SingleCategory = () => {
  const category = useLoaderData();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(category);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-10 py-10">
        {category.map((categoryCard) => (
          <CategoryOptions
            key={categoryCard._id}
            categoryCard={categoryCard}
            setProduct={setProduct}
          ></CategoryOptions>
        ))}
      </div>
      {product && (
        <BookingModal product={product} setProduct={setProduct}></BookingModal>
      )}
    </>
  );
};

export default SingleCategory;
