import React from "react";

// <FeaturePanel title="title" featureArray={featureArray} />

// const featureArray = [
//   { title: "title 1", description: "description 1", imagePath: "" },
//   { title: "title 2", description: "description 2", imagePath: "" },
//   { title: "title 3", description: "description 3", imagePath: "" },
// ];

export default function FeaturePanel({ title, featureArray }) {
  return (
    <div className="w-3/4 m-auto ">
      <p className="text-4xl text-center font-medium pt-20">{title}</p>
      <div className="flex justify-center mt-10 rounded flex-wrap">
        {featureArray.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center p-5 m-5 rounded bg-orange-300"
          >
            <img
              height="200"
              width="200"
              src={feature.imagePath}
              alt={feature.title}
              className="pb-5"
            />
            <p className="pb-5 text-2xl font-semibold">{feature.title}</p>
            <p className="pb-5 font-light">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
