import React, { useState, useRef, useEffect } from "react";

// <BigCarousel title="Title" array={bigCarouselArray} />

// const bigCarouselArray = [
//   {
//     imagePath: HeroImage,
//     description: "Test description",
//     author: "Author Name",
//   },
//   {
//     imagePath: HeroImage,
//     description: "Test description",
//     author: "Author Name",
//   },
// ];

export default function BigCarousel({ title, array }) {
  const [currentImg, setCurrentImg] = useState(0);
  const bigCarouselRef = useRef();

  const nextImage = () => {
    if (currentImg < array.length - 1) {
      setCurrentImg(currentImg + 1);
      bigCarouselRef.current.classList.remove("fade");
      void bigCarouselRef.current.offsetWidth;
      bigCarouselRef.current.classList.add("fade");
    }
  };

  const previousImage = () => {
    if (currentImg > 0) {
      setCurrentImg(currentImg - 1);
      bigCarouselRef.current.classList.remove("fade");
      void bigCarouselRef.current.offsetWidth;
      bigCarouselRef.current.classList.add("fade");
    }
  };

  return (
    <div className="w-full lg:w-2/4 m-auto mt-20">
      <p className="text-center text-4xl pb-10 font-medium">{title}</p>

      <div ref={bigCarouselRef} className="relative h-[60vh]">
        <img
          src={array[currentImg].imagePath}
          alt={array[currentImg].author}
          className="object-cover h-full w-full"
        />
        <div className="absolute bottom-0 lg:top-0 p-10 w-full h-2/4 lg:w-2/4 lg:h-full bg-white/50">
          <p className="text-3xl font-semibold mb-5 ">
            <em>"{array[currentImg].description}"</em>
          </p>
          <p className="text-lg font-light mb-5">{array[currentImg].author}</p>
        </div>
      </div>

      <div className="flex justify-between w-full pt-10 px-10 lg:px-0">
        <button onClick={previousImage}>
          <p className="border-2 rounded-full px-2 py-1">
            <i class="fa-solid fa-caret-left"></i>
          </p>
        </button>
        <div className="flex justify-center items-center">
          {array.map((item, index) => (
            <div
              key={index}
              data-key={index}
              className={`border-2 h-5 w-5 rounded-full me-3 last:me-0  ${
                index === currentImg ? "bg-black" : ""
              }`}
            ></div>
          ))}
        </div>
        <button onClick={nextImage}>
          <p className="border-2 rounded-full px-2 py-1">
            <i class="fa-solid fa-caret-right"></i>
          </p>
        </button>
      </div>
    </div>
  );
}
