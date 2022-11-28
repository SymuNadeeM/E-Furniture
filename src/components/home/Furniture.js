import React from "react";
import furni3 from "../../Assets/Banner/Rectangle 33.png";
import furni2 from "../../Assets/Banner/Rectangle 34.png";
import furni1 from "../../Assets/Banner/Rectangle 35.png";

const Furniture = () => {
  return (
    <>
      <div className="px-[15px]  md:px-[55px] mx-auto">
        <div className="grid  md:grid-cols-2  gap-2">
          <div className="w-full  max-h-[510px] relative">
            <img
              src={furni1}
              alt=""
              className="w-full h-[247px] md:h-[510px]"
            />
            <div className="top-5 md:top-10 left-5 md:left-10 absolute space-y-1 md:space-y-3">
              <p className="font-Mulish font-semibold md:font-bold text-xl md:text-2xl text-ctext">
                Modern Furniture Collections
              </p>
              <p className="text-green font-Mulish font-normal md:font-semibold md:text-xl text-lg ">
                Starting from $500
              </p>
              <div className="flex items-center gap-2 text-[#757575] font-Mulish font-normal text-sm md:text-base">
                <p>Read more</p>
                <i class="fa-solid fa-arrow-right-long"></i>
              </div>
            </div>
          </div>
          <div className=" w-full space-y-[8px] md:space-y-[17px]">
            <div className="w-full h-[247px] relative">
              <img src={furni2} alt="" className=" w-full h-[247px]" />
              <div className="top-5 md:top-10 left-5 md:left-10 absolute space-y-1 md:space-y-3">
                <p className="font-Mulish font-semibold md:font-bold text-xl  text-ctext">
                  Geometric Bookcase
                </p>
                <p className="text-green font-Mulish font-normal text-lg ">
                  Up to 20% discount
                </p>
                <div className="flex items-center gap-2 text-[#757575] font-Mulish font-normal text-sm ">
                  <p>Read more</p>
                  <i class="fa-solid fa-arrow-right-long"></i>
                </div>
              </div>
            </div>
            <div className="w-full h-[247px] relative">
              <img src={furni3} alt="" className=" w-full h-[247px]" />
              <div className="top-5 md:top-10 left-5 md:left-10 absolute space-y-1 md:space-y-3">
                <p className="font-Mulish font-semibold md:font-bold text-xl  text-ctext">
                  Minimal Sofa collections
                </p>
                <p className="text-green font-Mulish font-normal text-lg ">
                  Sale upto 40% discount
                </p>
                <div className="flex items-center gap-2 text-[#757575] font-Mulish font-normal text-sm ">
                  <p>Read more</p>
                  <i class="fa-solid fa-arrow-right-long"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Furniture;
