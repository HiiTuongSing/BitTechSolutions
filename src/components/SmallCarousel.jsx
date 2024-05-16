import React, { useState, useRef, useEffect } from "react";

// <SmallCarousel title="title" array={smallCarouselArray} />

// const smallCarouselArray = [
//   { imagePath: HeroImage },
//   { imagePath: HeroImage },
//   { imagePath: HeroImage },
// ];

export default function SmallCarousel({ title, array }) {
  const smallCarouselRef = useRef();
  const [direction, setDirection] = useState(null);

  const scrollLeft = () => {
    setDirection("left");
  };

  const scrollRight = () => {
    setDirection("right");
  };

  useEffect(() => {
    if (direction === "left") {
      const firstElement = array.shift();
      array.push(firstElement);
    } else if (direction === "right") {
      const lastElement = array.pop();
      array.unshift(lastElement);
    }
    setDirection(null);
  }, [direction]);

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
        <div className="overflow-hidden">
          <div
            ref={smallCarouselRef}
            className="flex overflow-hidden justify-start h-[20vh] snap-x scroll-smooth "
          >
            {array.slice(0, 4).map((item, index) => (
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
