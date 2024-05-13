import React from "react";
import SecondaryButton from "./SecondaryButton";

// <ContentPanel title="Title" contentArray={contentArray} />

// const contentArray = [
//   {
//     title: "Title 1",
//     description: "Description 1",
//     imagePath: "",
//     linkPath: "/BitTechSolutions/",
//     linkText: "Learn More",
//   },
//   {
//     title: "Title 2",
//     description: "Description 2",
//     imagePath: "",
//     linkPath: "/BitTechSolutions/",
//     linkText: "Learn More",
//   },
// ];

export default function ContentPanel({ title, contentArray }) {
  return (
    <div className="w-3/4 m-auto pt-20">
      <p className="text-center text-4xl font-medium">{title}</p>
      {contentArray.map((content, index) => (
        <div
          className="flex h-[50vh] w-full my-10 py-10 rounded bg-orange-100 odd:flex-row-reverse odd:bg-orange-300 last:mb-0"
          key={index}
        >
          <div className="w-2/4 flex flex-col justify-center items-center">
            <p className="text-3xl font-semibold mb-5">{content.title}</p>
            <p className="text-lg font-light mb-5">{content.description}</p>
            <SecondaryButton
              linkPath={content.linkPath}
              linkText={content.linkText}
            />
          </div>
          <div className="w-2/4">
            <img
              className="w-full h-full object-cover px-10"
              src={content.imagePath}
              alt={content.title}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
