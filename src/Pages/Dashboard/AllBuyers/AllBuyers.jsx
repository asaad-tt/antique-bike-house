import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";
import Loading from "../../Loading/Loading";

const AllBuyers = () => {
  const url = `https://antique-bike-house-server.vercel.app/buyerseller?role=buyer`;

  const {
    data: buyers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["buyers", "buyer"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  console.log(buyers);

  const handleDelete = (id) => {
    fetch(`https://antique-bike-house-server.vercel.app/buyerseller/${id}`, {
      method: "Delete",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("successfully deleted", { autoClose: 700 });
        refetch();
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {buyers.map((seller, i) => (
            <tr key={seller._id}>
              <th>{i + 1}</th>
              <td>{seller.name}</td>
              <td>{seller.email}</td>
              <td>
                <button
                  onClick={() => handleDelete(seller._id)}
                  className="btn btn-xs btn-primary"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBuyers;
