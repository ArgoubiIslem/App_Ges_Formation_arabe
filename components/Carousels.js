/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';

function Carousels() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([
    'https://www.emploi.nat.tn/formations/img/bg-img/micro.png',
    'https://myplace-events.com/public/upload/events/2021/10/resize-event-image-1635105093-bV5nB.jpeg',
    'https://media.jumiadeals.com/ci_live/a5289370345e4f151f2593e.desktop-gallery-large.jpg',
  ]);
  function next() {
    if (count < 2) {
      setCount(count + 1);
    }
  }
  function prev() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <div
        id="carouselExampleCrossfade"
        className="carousel slide carousel-fade relative"
        data-bs-ride="carousel"
      >
        <div className=" carousel-indicators absolute right-0 bottom-0 left-0 mb-4 flex justify-center p-0">
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="relative h-screen w-full overflow-hidden">
          <div className="carousel-item active float-left w-full">
            <img
              src={list[count]}
              className=" flex h-screen w-screen "
              alt="Wild Landscape"
            />
          </div>
        </div>
        <button
          onClick={prev}
          className="carousel-control-prev absolute top-0 bottom-0 left-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <svg
            className=" h-8 w-8 transform font-bold text-gray-900 transition duration-500 ease-in-out hover:-translate-x-0.5 hover:text-gray-600 motion-reduce:transform-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <button
          onClick={next}
          className="carousel-control-next absolute top-0 bottom-0 right-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <svg
            className=" h-8 w-8 transform font-bold text-gray-900 transition duration-500 ease-in-out hover:translate-x-0.5 hover:text-gray-600 motion-reduce:transform-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Carousels;
