import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="px-[15px]  md:px-[55px] mx-auto">
        <div className=" flex flex-col  justify-between items-center md:flex-row p-4  space-y-2 md:space-y-0  md:gap-2">
          <div className=" flex items-center gap-[2px] md:gap-2">
            <i class="fa-solid  fa-user-secret text-4xl text-green"></i>
            <h2 className="font-Rubik text-2xl font-semibold leading-7">
              Furniking
            </h2>
          </div>
          <div className=" w-full md:w-3/5 grid col-span-8 ">
            <form action="">
              <div className=" flex items-center justify-between border rounded-lg border-green  ">
                <input
                  className="w-full  outline-none px-3"
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your..."
                />
                <button className="bg-green border border-green rounded-r-lg ring-1 ring-green p-[.8px]">
                  <i className="fa-solid fa-magnifying-glass mt-1 p-2 text-white hover:text-[black] duration-300"></i>
                </button>
              </div>
            </form>
          </div>

          <div className="hidden md:flex  justify-end items-center col-span-2  space-x-10">
            <i class="fa-solid fa-bag-shopping text-[22px] text-green "></i>
            <i class="fa-regular fa-bell text-[22px] text-green "></i>
            <i class="fa-regular fa-user text-[22px] text-green "></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
