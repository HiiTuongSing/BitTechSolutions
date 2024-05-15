import React, { useRef } from "react";

// <SmallCarousel title="title" array={smallCarouselArray} />

// const smallCarouselArray = [
//   { imagePath: HeroImage },
//   { imagePath: HeroImage },
//   { imagePath: HeroImage },
// ];

export default function SmallCarousel({ title, array }) {
  const smallCarouselRef = useRef();

  const scrollLeft = () => {
    smallCarouselRef.current.scrollLeft -= 200;
  };

  const scrollRight = () => {
    smallCarouselRef.current.scrollLeft += 200;
  };

  return (
    <div className="w-3/4 lg:w-2/4 m-auto pt-20">
      <div>
        <p className="text-center text-4xl pb-10 font-medium">{title}</p>
      </div>
      <div className="flex justify-between">
        <button onClick={scrollLeft}>
          <p className="border-2 rounded-full me-5 px-2 py-1">
            <i class="fa-solid fa-caret-left"></i>
          </p>
        </button>
        <div
          ref={smallCarouselRef}
          className="flex overflow-hidden justify-start h-[20vh] snap-x scroll-smooth "
        >
          {array.map((item, index) => (
            <div className="me-10 last:me-0 h-full aspect-square snap-center">
              <img
                key={index}
                src={item.imagePath}
                alt={index}
                className="h-full w-full"
              />
            </div>
          ))}
        </div>
        <button onClick={scrollRight}>
          <p className="border-2 rounded-full ms-5 px-2 py-1">
            <i class="fa-solid fa-caret-right"></i>
          </p>
        </button>
      </div>
    </div>
  );
}
