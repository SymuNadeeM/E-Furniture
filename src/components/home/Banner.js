import React from "react";
import ban1 from "../../Assets/Banner/fbanner2.jpg";

const Banner = () => {
  return (
    <>
      <div className="px-[15px]  md:px-[55px] mx-auto">
        <div className="grid  grid-cols-12  ">
          <div className="hidden md:flex max-h-[454px] col-span-2 bg-gray">
            <div class=" divide-y divide-gray2 text-ctext">
              <div className="px-4 py-2 font-Rubik font-normal ">All</div>
              <div className="px-4 py-2 font-Rubik font-normal ">
                New Arrivals
              </div>
              <div className="px-4 py-2 font-Rubik font-normal ">Hot Sale</div>
              <div className="px-4 py-2 font-Rubik font-normal ">Furniture</div>
              <div className="px-4 py-2 font-Rubik font-normal ">Amrature</div>
              <div className="px-4 py-2 font-Rubik font-normal ">Tabble</div>
              <div className="px-4 py-2 font-Rubik font-normal ">Chair</div>
              <div className="px-4 py-2 font-Rubik font-normal ">Sofa</div>
              <div className="px-4 py-2 font-Rubik font-normal ">Stools</div>
              <div className="px-4 py-2 font-Rubik font-normal ">Benches</div>
            </div>
          </div>
          <div className="pt-[8px] pl-[8px] col-span-full md:col-span-10">
            <img src={ban1} className="w-full h-[250px] md:h-[438px]" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
