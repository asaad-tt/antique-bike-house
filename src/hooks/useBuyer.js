import { useEffect, useState } from "react";

const useBuyer = (email) => {
  console.log(email);
  const [isBuyer, setIsBuyer] = useState(false);
  const [isBuyerLoading, setIsBuyerLoading] = useState(true);
  // console.log(isBuyer);
  useEffect(() => {
    if (email) {
      fetch(`https://antique-bike-house-server.vercel.app/users/buyer/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsBuyer(data.isBuyer);
          setIsBuyerLoading(false);
        });
    }
  }, [email]);
  return [isBuyer, isBuyerLoading];
};

export default useBuyer;
