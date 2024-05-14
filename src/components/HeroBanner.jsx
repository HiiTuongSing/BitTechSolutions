import React from "react";

// <HeroBanner imagePath="" title="" description="" />

export default function HeroBanner({ imagePath, title, description }) {
  return (
    <>
      <div className="relative h-[75vh] w-100 lg:w-3/4 m-auto">
        <img
          className="h-full w-full object-cover"
          src={imagePath}
          alt={title}
        />
        <div className="absolute py-10 bottom-0 lg:top-0 w-full lg:w-2/4 lg:h-full bg-slate-500/50 text-white flex flex-col justify-center items-center">
          <p className="w-3/4 text-5xl font-bold pb-5">{title}</p>
          <p className="w-3/4 text-lg font-thin">{description}</p>
        </div>
      </div>
    </>
  );
}
