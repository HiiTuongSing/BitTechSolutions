import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const isMobileView = useMediaQuery({ query: "(max-width: 1000px)" });

  useEffect(() => {
    setIsCollapsed(false);
    setIsClicked(false);
  }, [isMobileView]);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <div className="py-5 fixed w-full z-30 bg-orange-500">
        <nav className="flex w-full px-5 lg:px-0 lg:w-3/4 m-auto justify-between items-center">
          <Link
            className="lg:pe-5 text-xl hover:text-white w-3/4 lg:w-1/4"
            to="/BitTechSolutions/"
          >
            <p>
              <i className="fa-solid fa-gamepad"></i> Bit Tech Solutions
            </p>
          </Link>
          {isMobileView ? (
            <div>
              <div
                className="w-1/4 flex justify-end items-center cursor-pointer collapse-btn"
                onClick={handleCollapse}
              >
                <i className="fa-solid fa-grip-lines border-2 py-1 px-2 rounded"></i>
              </div>
            </div>
          ) : (
            <div className="flex justify-end items-center lg:w-3/4 justify-between ">
              <ul className="px-20 flex ">
                <li>
                  <div
                    className="relative px-5 text-xl hover:text-white"
                    onClick={handleClick}
                  >
                    <p>
                      Products{" "}
                      <i className="fa-solid fa-caret-down cursor-pointer"></i>
                    </p>
                    {isClicked && (
                      <div className="absolute bg-orange-300 p-5 rounded border-2 -left-5 w-[10vw]">
                        <p>
                          <Link
                            className="hover:text-black"
                            to="/BitTechSolutions/"
                          >
                            Product 1
                          </Link>
                        </p>
                        <p>
                          <Link
                            className="hover:text-black"
                            to="/BitTechSolutions/"
                          >
                            Product 2
                          </Link>
                        </p>
                        <p>
                          <Link
                            className="hover:text-black"
                            to="/BitTechSolutions/"
                          >
                            Product 3
                          </Link>
                        </p>
                      </div>
                    )}
                  </div>
                </li>
                <li className="px-5 text-xl hover:text-white">
                  <Link to="/BitTechSolutions/pricing">Pricing</Link>
                </li>
                <li className="px-5 text-xl hover:text-white">
                  <Link to="/BitTechSolutions/about">About</Link>
                </li>
              </ul>
              <ul className="flex lg:ps-20">
                <li className="px-5">
                  <Link
                    className="text-2xl hover:text-white"
                    to="/BitTechSolutions/"
                  >
                    <i class="fa-brands fa-square-facebook"></i>
                  </Link>
                </li>
                <li className="px-5 ">
                  <Link
                    className="text-2xl hover:text-white"
                    to="/BitTechSolutions/"
                  >
                    <i class="fa-brands fa-instagram"></i>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
        {isCollapsed && isMobileView && (
          <div className="flex flex-col justify-end items-start lg:w-3/4 justify-between ">
            <ul className="flex flex-col pt-5">
              <li>
                <div
                  className="relative px-5 text-xl hover:text-white"
                  onClick={handleClick}
                >
                  <p>
                    Products{" "}
                    <i className="fa-solid fa-caret-down cursor-pointer"></i>
                  </p>
                </div>
              </li>
              <li>
                {isClicked && isMobileView && (
                  <div className="ps-10">
                    <p>
                      <Link
                        className="hover:text-black"
                        to="/BitTechSolutions/"
                      >
                        Product 1
                      </Link>
                    </p>
                    <p>
                      <Link
                        className="hover:text-black"
                        to="/BitTechSolutions/"
                      >
                        Product 2
                      </Link>
                    </p>
                    <p>
                      <Link
                        className="hover:text-black"
                        to="/BitTechSolutions/"
                      >
                        Product 3
                      </Link>
                    </p>
                  </div>
                )}
              </li>
              <li className="px-5 text-xl hover:text-white">
                <Link to="/BitTechSolutions/pricing">Pricing</Link>
              </li>
              <li className="px-5 text-xl hover:text-white">
                <Link to="/BitTechSolutions/about">About</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="h-16 lg:h-24"></div>{" "}
    </>
  );
}

{
  /* <div className="w-3/4 m-auto h-20">
      <h1>NavBar</h1>
      {isMobileView ? (
        <div id="collapse" className="relative" onClick={handleCollapse}>
          <div>
            <h1>Button</h1>
          </div>
          {isCollapsed && (
            <div className="object-none absolute bg-orange-100 z-40">
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
            </div>
          )}
        </div>
      ) : (
        <nav>
         
          <div className="object-none absolute bg-orange-100 z-40">
            <p>Test</p>
            <p>Test</p>
            <p>Test</p>
          </div>
        </nav>
      )}
    </div> */
}
