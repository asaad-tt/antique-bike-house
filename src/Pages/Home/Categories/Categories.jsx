import { useQuery } from "@tanstack/react-query";
import React from "react";
import CategoriesItem from "./CategoriesItem";

const Categories = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:8000/categories");
      const data = await res.json();
      console.log(data);
      return data;
    },
  });
  return (
    <div>
      <h5 className="text-orange-500">categories</h5>
      <div>
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
