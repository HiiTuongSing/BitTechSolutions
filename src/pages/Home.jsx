import React from "react";

import HeroBanner from "../components/HeroBanner";
import ContentPanel from "../components/ContentPanel";
import FeaturePanel from "../components/FeaturePanel";
import CallToActionPanel from "../components/CallToActionPanel";
import SmallCarousel from "../components/SmallCarousel";
import BigCarousel from "../components/BigCarousel";

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

const featureArray = [
  { title: "Title 1", description: "Description 1", imagePath: HeroImage },
  { title: "Title 2", description: "Description 2", imagePath: HeroImage },
  { title: "Title 3", description: "Description 3", imagePath: HeroImage },
];

const smallCarouselArray = [
  { imagePath: HeroImage },
  { imagePath: HeroImage },
  { imagePath: HeroImage },
  { imagePath: HeroImage },
  { imagePath: HeroImage },
  { imagePath: HeroImage },
  { imagePath: HeroImage },
  { imagePath: HeroImage },
  { imagePath: HeroImage },
];

const bigCarouselArray = [
  {
    imagePath: HeroImage,
    description: "God damn that was really tasty!",
    author: "Someone in restaurant",
  },
  {
    imagePath: HeroImage,
    description: "Lazy to think so here we are!",
    author: "Author Name 2",
  },
  {
    imagePath: HeroImage,
    description: "Test description 3",
    author: "Author Name 3",
  },
  {
    imagePath: HeroImage,
    description: "Test description 4",
    author: "Author Name 4",
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
      <ContentPanel title="Content Panel" contentArray={contentArray} />
      <FeaturePanel title="Feature Panel" featureArray={featureArray} />
      <BigCarousel title="Big Carousel Here!" array={bigCarouselArray} />
      <SmallCarousel title="Small Carousel Here!" array={smallCarouselArray} />

      <CallToActionPanel
        title="Call to Action Panel"
        description="Gotta tempt them to click on the button, no matter the cost!"
        linkPath="/BitTechSolutions/"
        linkText="Click here now!"
      />
    </>
  );
}
