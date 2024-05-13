import React from "react";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>This is Home Page!</h1>
      <br />
      <Link className="text-blue-500" to="/BitTechSolutions/about">
        About
      </Link>
    </>
  );
}
