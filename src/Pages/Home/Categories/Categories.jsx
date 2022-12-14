import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../Loading/Loading";
import CategoriesItem from "./CategoriesItem/CategoriesItem";

const Categories = () => {
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(
        "https://antique-bike-house-server.vercel.app/categories"
      );
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="py-10">
      <h5 className="text-teal-400 text-center font-bold text-xl mb-10 tracking-[10px]">
        categories
      </h5>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
        {categories.map((category) => (
          <CategoriesItem
            key={category._id}
            category={category}
          ></CategoriesItem>
        ))}
      </div>
    </div>
  );
};

export default Categories;
