import React from "react";
//Hot chairs of the modern era are now available in our stack // Modern chair
import sepOne from "../../Assets/Banner/Rectangle 43.png";
import septwo from "../../Assets/Banner/Rectangle 44.png";
import MyTime from "./MyTime";

const SpeOffer = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 21600);
  return (
    <>
      <div className="px-[10px] mt-[50px] md:px-[55px] mx-auto py-6">
        <div className="text-center space-y-3">
          <h3 className="font-Mulish text-2xl md:text-4xl leading-[45px] text-ctext uppercase py-8">
            special offer
          </h3>
        </div>
        <div className="grid md:grid-cols-2 gap-[30px]">
          <div className="w-full h-[249px] relative">
            <img src={sepOne} alt="" className="w-full h-full" />
            <div className="grid grid-cols-2 absolute top-0 left-0 p-6">
              <div className="space-y-6">
                <div className=" space-y-4">
                  <h4 className="font-Mulish font-semibold text-lg md:text-xl leading-7 text-ctext">
                    Living Room Furniture
                  </h4>
                  <p className="font-Mulish text-xs leading-4 text-[#757575]">
                    Hot chairs of the modern era are now available in our stack
                  </p>
                </div>

                <div className="flex items-center gap-4 ">
                  <p className="font-Mulish text-xl leading-5 text-green font-bold">
                    $150
                  </p>
                  <p className="font-Mulish text-[18px] leading-5 text-[#CCCCCC] font-semibold">
                    $250
                  </p>
                  <button className="font-Mulish rounded bg-green font-bold text-xs leading-4 uppercase text-white px-[6px] py-[3px] md:px-[10px] md:py-[6px]">
                    shop now
                  </button>
                </div>

                {/* // countdown */}
                <MyTime expiryTimestamp={time} />
              </div>
            </div>
          </div>
          <div className="w-full h-[249px] relative">
            <img src={septwo} alt="" className="w-full h-full" />
            <div className="grid grid-cols-2 absolute top-0 left-0 p-6">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-Mulish font-semibold text-lg md:text-xl leading-7 text-ctext">
                    Modern chair
                  </h4>
                  <p className="font-Mulish text-xs leading-4 text-[#757575]">
                    Hot chairs of the modern era are now available in our stack
                  </p>
                </div>

                <div className="flex items-center gap-4 ">
                  <p className="font-Mulish text-xl leading-5 text-green font-bold">
                    $150
                  </p>
                  <p className="font-Mulish text-[18px] leading-5 text-[#CCCCCC] font-semibold">
                    $250
                  </p>
                  <button className="font-Mulish rounded bg-green font-bold text-xs leading-4 uppercase text-white px-[6px] py-[3px] md:px-[10px] md:py-[6px]">
                    shop now
                  </button>
                </div>

                {/* // countdown */}
                <MyTime expiryTimestamp={time} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpeOffer;
