import React from "react";

const Feature = () => {
  return (
    <>
      <div className="px-[15px] py-[40px] md:px-[55px] mx-auto">
        <div className="grid  grid-cols-2 md:grid-cols-4 gap-3 md:gap-0 ">
          <div className="w-full flex items-center justify-center gap-3">
            <i class="fa-solid fa-truck-pickup text-3xl md:text-4xl text-green"></i>
            <div className="">
              <p className="font-Rubik text-base md:text-lg font-medium leading-6 text-ctext">
                Free Shipping
              </p>
              <p className="font-Rubik text-[10px] md:text-xs leading-6 text-ctext2">
                Orders over $100
              </p>
            </div>
          </div>
          <div className="w-full flex items-center justify-center gap-3">
            <i class="fa-solid fa-gift text-3xl md:text-4xl text-green"></i>
            <div className="">
              <p className="font-Rubik text-base md:text-lg font-medium leading-6 text-ctext">
                Smart Gift Card
              </p>
              <p className="font-Rubik text-[10px] md:text-xs leading-6 text-ctext2">
                Buy $1000 to get card
              </p>
            </div>
          </div>
          <div className="w-full flex items-center justify-center gap-3">
            <i class="fa-regular fa-money-bill-1 text-3xl md:text-4xl text-green"></i>
            <div className="">
              <p className="font-Rubik text-base md:text-lg font-medium leading-6 text-ctext">
                Quick Payment
              </p>
              <p className="font-Rubik text-[10px] md:text-xs leading-6 text-ctext2">
                100% secure payment
              </p>
            </div>
          </div>
          <div className="w-full flex items-center justify-center gap-3">
            <i class="fa-solid fa-headset text-3xl md:text-4xl text-green"></i>
            <div className="">
              <p className="font-Rubik text-base md:text-lg font-medium leading-6 text-ctext">
                24/7 Support
              </p>
              <p className="font-Rubik text-[10px] md:text-xs leading-6 text-ctext2">
                Quick support
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
