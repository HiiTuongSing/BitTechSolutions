import React from "react";

// <HeroBanner imagePath="" title="" description="" />

export default function HeroBanner({ imagePath, title, description }) {
  return (
    <>
      <div className="relative h-[75vh] w-3/4 m-auto">
        <img
          className="h-full w-full object-cover"
          src={imagePath}
          alt={title}
        />
        {/* <div className="absolute left-3 top-2/4 -translate-y-2/4 bg-slate-500 text-white p-5 rounded">
          <p className="text-2xl font-bold">{title}</p>
          <p className="text-lg font-thin">{description}</p>
        </div> */}
        <div className="absolute top-0 w-2/4 h-full bg-slate-500/50 text-white flex flex-col justify-center items-center">
          <p className="w-3/4 text-5xl font-bold pb-5">{title}</p>
          <p className="w-3/4 text-lg font-thin">{description}</p>
        </div>
      </div>
    </>
  );
}
