import React from "react";
import SecondaryButton from "./SecondaryButton";

// <CallToActionPanel title="Title" description="description" linkPath="/BitTechSolutions/" linkText="Try it out now!" />

export default function CallToActionPanel({
  title,
  description,
  linkPath,
  linkText,
}) {
  return (
    <div className=" w-full bg-orange-100 mt-20">
      <div className="flex flex-col justify-center items-center w-3/4 m-auto h-[40vh]">
        <p className="text-4xl font-medium pb-5 ">{title}</p>
        <p className="text-lg font-light pb-5">{description}</p>
        <SecondaryButton linkPath={linkPath} linkText={linkText} />
      </div>
    </div>
  );
}
