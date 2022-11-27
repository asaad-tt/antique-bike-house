import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import OrderItems from "./OrderItems/OrderItems";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  console.log(bookings);

  return (
    <div>
      <h3 className="text-3xl font-bold">My Orders</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5 py-10">
        {bookings.map((booking) => (
          <OrderItems key={booking._id} booking={booking}></OrderItems>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
