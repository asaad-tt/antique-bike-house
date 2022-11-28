import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";
import Loading from "../../Loading/Loading";
import { GoVerified } from "react-icons/go";

const AllSellers = () => {
  const url = `https://antique-bike-house-server.vercel.app/buyerseller?role=seller`;

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

  const { isVerified } = sellers;
  console.log(isVerified);

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

  // seller verify process
  const handleVerifySeller = (seller) => {
    fetch(
      `https://antique-bike-house-server.vercel.app/verifySeller/${seller.email}`,
      {
        method: "PUT",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success(`${seller.name} is now a verified seller`);
          refetch();
        }
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
            <th>Verify</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sellers.map((seller, i) => (
            <tr key={seller._id}>
              <th>{i + 1}</th>
              <td>{seller.name}</td>
              <td>{seller.email}</td>

              {seller?.isVerified === true ? (
                <>
                  <td>
                    <button className="btn btn-xs bg-green-600">
                      {" "}
                      <GoVerified className="text-blue-700"></GoVerified>
                      Verified
                    </button>
                  </td>
                </>
              ) : (
                <td>
                  <button
                    onClick={() => handleVerifySeller(seller)}
                    className="btn btn-xs bg-teal-400"
                  >
                    Verify Seller
                  </button>
                </td>
              )}

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
