import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData, useNavigation } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import Loading from "../../Loading/Loading";

const Payment = () => {
  const booking = useLoaderData();

  const navigation = useNavigation();

  const { itemName, price } = booking;
  console.log(price);
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }

  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

  console.log(stripePromise);

  return (
    <div className="ml-5">
      <h2 className="text-3xl font-semibold">BooKing for {itemName}</h2>
      <p>
        You are about to pay total tk. <strong>{price}</strong>
        for this is payment
      </p>
      <div className="w-96 my-6">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
