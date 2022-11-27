import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Loading from "../../Loading/Loading";

const CheckoutForm = ({ booking }) => {
  // const [isLoading, setIsLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState();
  const [clientSecret, setClientSecret] = useState("");
  const { price } = booking;

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  /*  useEffect(() => {
    // Create PaymentIntent as soon as the page loads

    fetch("http://localhost:8000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]); */

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    // setIsLoading(true);

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }
    // setIsLoading(false);
  };

  // if (loading) {
  //   <Loading></Loading>;
  // }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm btn-primary mt-6"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      <p className="text-red-500">{cardError}</p>
    </div>
  );
};

export default CheckoutForm;