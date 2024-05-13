import React from "react";

import HeroBanner from "../components/HeroBanner";

import HeroImage from "../images/pexels-kellie-churchman.jpg";

export default function About() {
  return (
    <>
      <HeroBanner
        imagePath={HeroImage}
        title="This is About Page!"
        description="It consist of a <img> as background, and a <div> that overlaps it."
      />
    </>
  );
}
