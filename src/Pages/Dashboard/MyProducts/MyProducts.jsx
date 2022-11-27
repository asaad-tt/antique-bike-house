import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Context/AuthProvider";
import Loading from "../../Loading/Loading";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/products?email=${user?.email}`;

  const {
    data: products = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  console.log(products);

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/products/${id}`, {
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
    <div>
      <h2 className="text-3xl font-bold mb-5">My Products</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Seller Name</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Sales Status</th>
              <th>Advertise</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>{product.sellerName}</td>
                <td>{product.name}</td>
                <td>{product.resalePrice}</td>
                <td>Blue</td>
                <td>Blue</td>
                <td>
                  <button
                    onClick={() => handleDelete(product._id)}
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
    </div>
  );
};

export default MyProducts;
