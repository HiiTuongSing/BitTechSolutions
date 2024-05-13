import React from "react";

import HeroBanner from "../components/HeroBanner";
import ContentPanel from "../components/ContentPanel";

import HeroImage from "../images/pexels-kellie-churchman.jpg";

const contentArray = [
  {
    title: "Title 1",
    description: "Description 1",
    imagePath: HeroImage,
    linkPath: "/BitTechSolutions/",
    linkText: "Learn More 1",
  },
  {
    title: "Title 2",
    description: "Description 2",
    imagePath: HeroImage,
    linkPath: "/BitTechSolutions/",
    linkText: "Learn More 2",
  },
];

export default function Home() {
  return (
    <>
      <HeroBanner
        imagePath={HeroImage}
        title="This is Home Page!"
        description="It consist of a <img> as background, and a <div> that overlaps it."
      />
      <ContentPanel title="Title" contentArray={contentArray} />
    </>
  );
}
