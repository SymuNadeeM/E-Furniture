import React, { useState } from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  const [nav, setNav] = useState(true);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="w-full bg-[#7AC751]">
        {/* large screen */}
        <div className=" ">
          <div className=" hidden md:flex j px-[10px] items-center justify-between md:px-[55px] mx-auto">
            <p className="text-white font-normal text-base leading-5 font-abc">
              Welcome to our online shop
            </p>
            <div className=" flex items-center justify-between gap-2 ">
              <div>
                <select
                  id="countries"
                  class="bg-[#7AC751]  text-white text-sm     "
                >
                  <option selected>English(USD)</option>

                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                </select>
              </div>
              <div>
                <Link
                  to="#"
                  className="text-white font-normal text-sm leading-3 font-abc"
                >
                  Login or Sign up{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* small screen */}

        <div className="px-[15px] py-1 flex items-center justify-between md:hidden ">
          <div>
            <i className="fa-solid fa-house text-white text-2xl "></i>
          </div>

          <div>
            <p className="text-gray-600 uppercase text-white font-abc text-sm">
              free shipping this week
            </p>
            <p className="text-gray-600 uppercase font-Rubik text-white text-sm">
              order over -$75
            </p>
          </div>

          <ul className="flex items-center space-x-4">
            <li>
              <Link to="userpage">
                <i className="fa-regular fa-user text-white text-2xl  "></i>
              </Link>
            </li>
            <li className="relative">
              <i className="fa-regular fa-bell  text-white text-2xl   "></i>

              <span className="absolute top-[-3px] right-[-3px]  rounded-full w-4  h-4  items-center flex justify-center  bg-[#ff909d] text-white">
                2
              </span>
            </li>
            <li className="relative">
              <Link to="#">
                <i className="fa-solid fa-bag-shopping text-white text-2xl  "></i>
              </Link>

              <span className="absolute top-[-3px] right-[-5px] rounded-full w-4  h-4  items-center flex justify-center  bg-[#ff909d] text-white">
                3
              </span>
            </li>
          </ul>

          {/* DROWER PART */}

          <div>
            <div onClick={handleClick} className="block md:hidden">
              <i class="fa-solid fa-bars  text-2xl text-white"></i>
            </div>
            <div
              className={
                !nav
                  ? "fixed left-0 top-0 w-[60%] h-full  ease-in-out duration-500 bg-white"
                  : "fixed left-[-100%] duration-200"
              }
            >
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div className=" flex items-center gap-[4px] md:gap-2">
                    <i class="fa-solid  fa-user-secret text-2xl text-green"></i>
                    <h2 className="font-Rubik text-xl font-semibold leading-7">
                      Furniking
                    </h2>
                  </div>
                  <div onClick={handleClick}>
                    <i class="fa-regular fa-circle-xmark text-green text-xl"></i>
                  </div>
                </div>
                <ul className="uppercase mt-4 text-ctext divide-ctext2 space-y-2 divide-y">
                  <li>home</li>
                  <li>shop</li>
                  <li>blog</li>
                  <li>about</li>
                  <li>contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
