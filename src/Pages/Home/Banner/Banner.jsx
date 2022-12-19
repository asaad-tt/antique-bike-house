import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="carousel w-full rounded-lg">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="carousel-img">
          <img
            src="https://i.ibb.co/zRD73jV/blue-scooter.jpg"
            alt=""
            className="w-full "
          />
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
          <h1 className="text-5xl  banner_title font-bold text-white">
            Classic <strong className="text-teal-400">vespa</strong> , what you
            always want in <br />
            your collection
          </h1>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="carousel-img">
          <img
            src="https://i.ibb.co/X3Rp7tN/royal-enfield.jpg"
            alt=""
            className="w-full "
          />
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
          <h1 className="text-5xl  banner_title font-bold text-white">
            Everyone's Dream{" "}
            <strong className="text-teal-400">Royal Enfield</strong> , <br />
            when its Your doorstep !!
          </h1>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="carousel-img">
          <img
            src="https://i.ibb.co/LzcdMhd/zixxer.jpg"
            alt=""
            className="w-full "
          />
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
          <h1 className="text-5xl  banner_title font-bold text-white">
            <strong className="text-teal-400">Gixxer</strong> New generation
            monster <br />
            now near your hands !!
          </h1>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <div className="carousel-img">
          <img
            src="https://i.ibb.co/vkNNrL7/blue-EB.jpg"
            alt=""
            className="w-full "
          />
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
          <h1 className="text-5xl  banner_title font-bold text-white">
            <strong className="text-teal-400">Aprilla</strong> can fulfil your
            dream <br />
            get it before you loose it !!
          </h1>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
