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
    <div>
      <p className="text-red-500 text-3xl"> something went wrong</p>
      <p className="text-red-400">{error.statusText || error.message}</p>
      <h4>
        please <button onClick={handleLogout}>Logout</button>
      </h4>
    </div>
  );
};

export default DisplayError;
