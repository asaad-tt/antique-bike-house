import { useEffect, useState } from "react";

const useSeller = (email) => {
  console.log(email);
  const [isSeller, setIsSeller] = useState(false);
  const [isSellerLoading, setIsSellerLoading] = useState(true);
  console.log(isSeller);
  useEffect(() => {
    if (email) {
      fetch(
        `https://antique-bike-house-server.vercel.app/users/seller/${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsSeller(data.isSeller);
          setIsSellerLoading(false);
        });
    }
  }, [email]);
  return [isSeller, isSellerLoading];
};

export default useSeller;
