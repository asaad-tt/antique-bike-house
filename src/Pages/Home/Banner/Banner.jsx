import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
            <h1 className="text-5xl  banner_title font-bold text-white">
              Its awesome eating delicious <br />
              Homemade food
            </h1>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;
