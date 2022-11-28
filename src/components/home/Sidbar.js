import React from "react";

const Sidbar = () => {
  return (
    <>
      <div className="hidden md:grid">
        <div className=" bg-gray mt-2">
          <div className="px-[10px]  md:px-[55px] mx-auto">
            <div className="grid  grid-cols-12  ">
              <div className="col-span-2 flex items-center">
                <div className=" w-full flex items-center bg-green text-white px-7 py-4 space-x-[6px]">
                  <i class="fa-solid fa-bars-staggered"></i>
                  <p className="text-sm block">ALL COLLECTIONS</p>
                </div>
              </div>
              <div
                className=" col-span-10 flex items-center uppercase 
               
              font-Rubik font-normal text-sm leading-4"
              >
                <ul className="flex space-x-12">
                  <li className="ml-[8px]">Home</li>
                  <li>Shop</li>
                  <li>Blog</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidbar;
