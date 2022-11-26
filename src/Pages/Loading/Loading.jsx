import React from "react";
import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
          role="status"
        >
          {/* <span className="visually-hidden">Loading...</span> */}
          <HashLoader
            color="#36d7b7"
            size={50}
            aria-label="Loading Spinner"
            style={{ margin: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
