import React from "react";
import { Link } from "react-router-dom";

// <SecondaryButton linkPath="/BitTechSolutions" linkText="Learn More" />

export default function SecondaryButton({ linkPath, linkText }) {
  return (
    <Link
      className="rounded-3xl px-5 py-2 border-2 border-black bg-orange-400 hover:bg-red-300 hover:border-red-400 hover:scale-125 transition ease-in-out"
      to={linkPath}
    >
      {linkText}
    </Link>
  );
}
