import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-3/4 m-auto h-[50vh] mt-20">
      <div className="flex justify-between">
        <Link
          className="pe-5 text-xl hover:text-orange-400"
          to="/BitTechSolutions/"
        >
          <i className="fa-solid fa-gamepad"></i> Bit Tech Solutions
        </Link>
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
      </div>
      <hr></hr>
      <div className="flex pt-5">
        <div className="w-1/4 text-wrap me-5">
          <p className="text-lg font-light pb-5">
            Some long history about company, founded by a man that swicthed
            career and no one wants to hire him. As such he went on a long
            journey of lone ranger!
          </p>

          <p className="text-lg font-light">
            Tel:{" "}
            <Link className="text-blue-600 hover:text-red-400">
              012-3456789
            </Link>
          </p>
          <p className="text-lg font-light">
            Email:{" "}
            <Link className="text-blue-600 hover:text-red-400">
              BitTechSolutions@xmail.com
            </Link>
          </p>
        </div>

        <div className="w-1/4 ps-5 border-s-2">
          <p className="text-xl font-semibold underline">Products</p>
          <p className="text-lg font-light">
            <Link
              className="text-blue-600 hover:text-red-400"
              to="/BitTechSolutions/"
            >
              Product 1
            </Link>
          </p>
          <p className="text-lg font-light">
            <Link
              className="text-blue-600 hover:text-red-400"
              to="/BitTechSolutions/"
            >
              Product 2
            </Link>
          </p>
          <p className="text-lg font-light">
            <Link
              className="text-blue-600 hover:text-red-400"
              to="/BitTechSolutions/"
            >
              Product 3
            </Link>
          </p>
        </div>
        <div className="w-1/4 ps-5 border-s-2">
          <p className="text-xl font-semibold underline">Pricings</p>
          <p className="text-lg font-light">
            <Link
              className="text-blue-600 hover:text-red-400"
              to="/BitTechSolutions/"
            >
              Pricing 1
            </Link>
          </p>
          <p className="text-lg font-light">
            <Link
              className="text-blue-600 hover:text-red-400"
              to="/BitTechSolutions/"
            >
              Pricing 2
            </Link>
          </p>
          <p className="text-lg font-light">
            <Link
              className="text-blue-600 hover:text-red-400"
              to="/BitTechSolutions/"
            >
              Pricing 3
            </Link>
          </p>
        </div>
        <div className="w-1/4 ps-5 border-s-2">
          <p className="text-xl font-semibold underline">Others</p>
          <p className="text-lg font-light">
            <Link
              className="text-blue-600 hover:text-red-400"
              to="/BitTechSolutions/"
            >
              Other 1
            </Link>
          </p>
          <p className="text-lg font-light">
            <Link
              className="text-blue-600 hover:text-red-400"
              to="/BitTechSolutions/"
            >
              Other 2
            </Link>
          </p>
          <p className="text-lg font-light">
            <Link
              className="text-blue-600 hover:text-red-400"
              to="/BitTechSolutions/"
            >
              Other 3
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
