import React from "react";
import Lottie from "lottie-react";
import lottie from "./lottie.json";

const Dashboard = () => {
  return (
    <div>
      <h3 className="text-3xl text-center my-6 font-bold">
        Welcome to <span className="text-teal-400">Dashboard</span>
      </h3>
      <div className="text-center ">
        <Lottie animationData={lottie} loop={true} />
      </div>
    </div>
  );
};

export default Dashboard;
