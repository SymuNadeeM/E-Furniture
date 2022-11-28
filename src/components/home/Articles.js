import React from "react";
import cart2 from "../../Assets/Banner/Card (1).png";
import cart3 from "../../Assets/Banner/Card (2).png";
import cart4 from "../../Assets/Banner/Card (3).png";
import cart1 from "../../Assets/Banner/Card.png";

const Articles = () => {
  return (
    <>
      <div className="px-[15px] mt-[50px] md:px-[55px] mx-auto py-6">
        <div className="text-center space-y-3">
          <h3 className="font-Mulish text-2xl md:text-4xl leading-[45px] text-ctext uppercase py-8">
            Our Latest Articles
          </h3>
        </div>
        <div className="space-y-[26px]">
          <div className="grid md:grid-cols-2 gap-[26px]">
            <div className="w-full h-[255px] md:h-[465.28px] relative">
              <img src={cart1} alt="" className="h-[255px] md:h-full w-full" />
              <div className="absolute bottom-5 left-5 space-y-2">
                <div className="flex items-center gap-4 ">
                  <div className="flex items-center gap-1 bg-white text-green text-[8px] md:text-xs p-1 rounded">
                    <i className="fa-solid fa-tag"></i>
                    <p>Furniture</p>
                  </div>
                  <p
                    className="font-Mulish font-normal leading-5 text-white  
                  text-xs md:text-sm"
                  >
                    23 September 2022
                  </p>
                </div>
                <h4 className="font-Mulish font-bold text-2xl md:text-[39px] leading-[47px] text-white py-1 pr-2">
                  Begineer guid buying minimal sofa
                </h4>
                <p className="text-[#FFFFFF] font-medium text-sm leading-5">
                  Read more
                </p>
              </div>
            </div>
            <div className="w-full h-[255px] md:h-[465.28px] relative">
              <img src={cart2} alt="" className="h-full w-full" />
              <div className="absolute bottom-5 left-5 space-y-2">
                <div className="flex items-center gap-4 ">
                  <div className="flex items-center gap-1 bg-white text-green text-[8px] md:text-xs p-1 rounded">
                    <i className="fa-solid fa-tag"></i>
                    <p>Furniture</p>
                  </div>
                  <p className="font-Mulish font-normal leading-5 text-white text-xs md:text-sm">
                    23 September 2022
                  </p>
                </div>
                <h4 className="font-Mulish font-bold text-2xl md:text-[39px] leading-[47px] text-white py-1 pr-2">
                  Begineer guid buying minimal sofa
                </h4>
                <p className="text-[#FFFFFF] font-medium text-sm leading-5">
                  Read more
                </p>
              </div>
            </div>
            <div className="w-full h-[255px] md:h-[465.28px] relative">
              <img src={cart3} alt="" className="h-full w-full" />
              <div className="absolute bottom-5 left-5 space-y-2">
                <div className="flex items-center gap-4 ">
                  <div className="flex items-center gap-1 bg-white text-green text-[8px] md:text-xs p-1 rounded">
                    <i className="fa-solid fa-tag"></i>
                    <p>Furniture</p>
                  </div>
                  <p className="font-Mulish font-normal leading-5 text-white text-xs md:text-sm">
                    23 September 2022
                  </p>
                </div>
                <h4 className="font-Mulish font-bold text-2xl md:text-[39px]  leading-[47px] text-white py-1 pr-2">
                  Begineer guid buying minimal sofa
                </h4>
                <p className="text-[#FFFFFF] font-medium text-sm leading-5">
                  Read more
                </p>
              </div>
            </div>
            <div className="w-full h-[255px] md:h-[465.28px] relative">
              <img src={cart4} alt="" className="h-full w-full" />
              <div className="absolute bottom-5 left-5 space-y-2">
                <div className="flex items-center gap-4 ">
                  <div className="flex items-center gap-1 bg-white text-green text-[8px] md:text-xs p-1 rounded">
                    <i className="fa-solid fa-tag"></i>
                    <p>Furniture</p>
                  </div>
                  <p className="font-Mulish font-normal leading-5 text-white text-xs md:text-sm">
                    23 September 2022
                  </p>
                </div>
                <h4 className="font-Mulish font-bold text-2xl md:text-[39px]  leading-[47px] text-white py-1 pr-2">
                  Begineer guid buying minimal sofa
                </h4>
                <p className="text-[#FFFFFF] font-medium text-sm leading-5">
                  Read more
                </p>
              </div>
            </div>
          </div>
          {/* 2nd part */}
          {/* <div className="grid md:grid-cols-2 gap-[26px]">
            
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Articles;
