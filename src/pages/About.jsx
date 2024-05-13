import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <h1>This is about page!</h1>
      <br />
      <Link className="text-blue-500" to="/BitTechSolutions/">
        Home
      </Link>
    </>
  );
}
