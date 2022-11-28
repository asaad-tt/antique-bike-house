import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useBuyer from "../../hooks/useBuyer";

import Loading from "../../Pages/Loading/Loading";

const BuyerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isBuyer, IsBuyerLoading] = useBuyer(user?.email);
  const location = useLocation();
  console.log(loading);

  if (loading || IsBuyerLoading) {
    return <Loading></Loading>;
  }
  if (user && isBuyer) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;
