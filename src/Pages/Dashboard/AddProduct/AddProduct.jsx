import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Context/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const handleAddProduct = (data) => {
    console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey} `;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData.data.url);
        const Products = {
          category: data.ProductCategory,
          condition: data.condition,
          description: data.description,
          image: imgData.data.url,
          location: data.location,
          name: data.name,
          phoneNumber: data.phoneNumber,
          postedTime: new Date().toLocaleString(),
          originalPrice: data.originalPrice,
          resalePrice: data.resalePrice,
          sellerName: user?.displayName,
          email: user?.email,
          purchaseDate: data.purchaseDate,
        };

        console.log(Products);

        // save product data to database
        fetch("https://antique-bike-house-server.vercel.app/products", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(Products),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              toast.info("product added successful", { autoClose: 800 });
            }
            navigate("/dashboard/myProducts");
          });
      });
  };

  return (
    <div className="w-96 py-7">
      <h2 className="text-3xl font-bold">Add Product</h2>
      <div className="ml-10 mt-10">
        <form onSubmit={handleSubmit(handleAddProduct)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Original Price</span>
            </label>
            <input
              type="text"
              {...register("originalPrice", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Resale Price</span>
            </label>
            <input
              type="text"
              {...register("resalePrice", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="number"
              {...register("phoneNumber", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              {...register("location", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Product Category</span>
            </label>
            <select
              {...register("ProductCategory", {
                required: true,
              })}
              className="select input-bordered w-full max-w-xs"
            >
              <option value="Awesome bike">Awesome bike</option>
              <option value="Electric Bike">Electric Bike</option>
              <option value="Scooter">Scooter</option>
            </select>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Product Condition</span>
            </label>
            <select
              {...register("condition", {
                required: true,
              })}
              className="select input-bordered w-full max-w-xs"
            >
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Fair">Fair</option>
            </select>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Purchase Date</span>
            </label>
            <input
              type="text"
              {...register("purchaseDate", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {/* <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Posted Time</span>
            </label>
            <input
              type="text"
              {...register("postedTime", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div> */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              {...register("sellerName", {
                required: true,
              })}
              defaultValue={user?.displayName}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              type="text"
              {...register("description", {
                required: true,
              })}
              className="input textarea textarea-bordered  w-full mb-5 max-w-xs"
            ></textarea>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="file"
              {...register("image", {
                required: "Photo is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.img && <p className="text-red-500">{errors.img.message}</p>}
          </div>

          <input
            className="btn btn-accent w-full mt-4"
            value="Add Product"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
