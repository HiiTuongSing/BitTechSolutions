import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="py-5 fixed w-full z-40">
        <nav className="flex w-3/4 m-auto justify-between items-center">
          <Link
            className="pe-5 text-xl hover:text-orange-400"
            to="/BitTechSolutions/"
          >
            <p>
              <i class="fa-solid fa-gamepad"></i> Bit Tech Solutions
            </p>
          </Link>
          <ul className="flex px-20">
            <li className="px-5 text-xl hover:text-orange-400">
              <Link to="/BitTechSolutions/pricing">Pricing</Link>
            </li>
            <li className="px-5 text-xl hover:text-orange-400">
              <Link to="/BitTechSolutions/about">About</Link>
            </li>
          </ul>
          <ul className="flex ps-20">
            <li className="px-5">
              <Link
                className="text-2xl hover:text-orange-400"
                to="/BitTechSolutions/"
              >
                <i class="fa-brands fa-square-facebook"></i>
              </Link>
            </li>
            <li className="px-5 ">
              <Link
                className="text-2xl hover:text-orange-400"
                to="/BitTechSolutions/"
              >
                <i class="fa-brands fa-instagram"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="h-24"></div>
    </>
  );
}
