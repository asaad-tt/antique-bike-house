import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import Loading from "../../Pages/Loading/Loading";

const SellerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isSeller, IsSellerLoading] = useAdmin(user?.email);
  const location = useLocation();
  console.log(loading);

  if (loading || IsSellerLoading) {
    return <Loading></Loading>;
  }
  if (user && isSeller) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;
