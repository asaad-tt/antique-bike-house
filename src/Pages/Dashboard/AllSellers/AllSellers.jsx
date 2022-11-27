import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";
import Loading from "../../Loading/Loading";

const AllSellers = () => {
  const url = `http://localhost:8000/buyerseller?role=seller`;

  const {
    data: sellers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["sellers", "seller"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  console.log(sellers);

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/buyerseller/${id}`, {
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
          {sellers.map((seller, i) => (
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

export default AllSellers;
