import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import OrderItems from "./OrderItems/OrderItems";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const url = `https://antique-bike-house-server.vercel.app/bookings?email=${user?.email}`;

  const { data: bookings = [], refetch } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      refetch();
      return data;
    },
  });

  console.log(bookings);

  return (
    <div>
      <h3 className="text-3xl ml-4 font-bold">My Orders</h3>
      <div className="grid grid-cols-1 ml-5 lg:grid-cols-2 md:grid-cols-2 gap-5 py-10">
        {bookings.map((booking) => (
          <OrderItems key={booking._id} booking={booking}></OrderItems>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
