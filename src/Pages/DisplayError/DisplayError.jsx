import React, { useContext } from "react";
import { useRouteError } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const DisplayError = () => {
  const error = useRouteError();
  const { logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="text-center">
        <p className="text-red-600 text-3xl font-bold"> something is missing</p>
        <p className="text-red-600 text-2xl font bold">
          {error.statusText || error.message}
        </p>
        <img src="https://i.ibb.co/PNVqyff/404.jpg" alt="" />
        <h4 className="text-xl font-bold mt-10">
          please{" "}
          <button className="text-primary" onClick={handleLogout}>
            Logout
          </button>
        </h4>
      </div>
    </div>
  );
};

export default DisplayError;
