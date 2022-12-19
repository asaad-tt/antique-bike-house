import React from "react";
import Lottie from "lottie-react";
import bike from "./lf20_on5CEa.json";

const Service = () => {
  return (
    <div>
      <h5 className="text-teal-500 text-center font-bold text-xl mt-10 tracking-[10px]">
        Services
      </h5>
      <div className=" ">
        <div className=" grid md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <Lottie animationData={bike} loop={true} />
          </div>
          <div className="flex justify-center items-center">
            <div>
              <h2 className="text-3xl font-bold mb-5">Our Services</h2>
              <p>
                <strong>Warranty period:</strong>we have free services during
                warranty period . during warranty period we provide free parts
                and free maintenance service . we have experienced people to
                serve you.{" "}
              </p>{" "}
              <br />
              <p>
                <strong>After warranty:</strong>This is our specialty, after
                warranty expire most of car center are avoiding their customer.
                but our customer always satisfied by us . because we care our
                customer . all you need just call us , every kind of parts are
                available and decent price . we are letting you complaining our
                services
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
