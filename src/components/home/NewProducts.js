import React from "react";
import { Link } from "react-router-dom";
import newprodata from "./NewProdData";

const NewProducts = () => {
  return (
    <>
      <div className="px-[15px] mt-[50px] md:px-[55px] mx-auto">
        <div className="text-center space-y-3">
          <h3 className="font-Mulish text-2xl md:text-4xl leading-[45px] text-ctext uppercase">
            Trending
          </h3>
          <div className="flex items-center justify-center space-x-8 ">
            <p className="font-Mulish font-medium text-[15px] md:text-[20px] leading-[30px] text-green">
              Top Products
            </p>
            <p className="font-Mulish font-medium   text-[15px] md:text-[20px] leading-[30px] text-c2 text-c3">
              New Arrivals
            </p>
            <p className="font-Mulish font-medium text-[15px] md:text-[20px] leading-[30px] text-c3 ">
              Best Sellers
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2  mt-[25px] md:grid-cols-3 xl:grid-cols-4  gap-4 md:gap-[30.9px]">
          {newprodata.map((newdata) => {
            return (
              <div key={newdata.id}>
                <div className="w-full  ">
                  <div className="w-full relative group">
                    <img
                      src={newdata.images}
                      alt=""
                      className="w-full h-[287.82px]"
                    />
                    <span className="bg-green-500 rounded-br-lg px-2 py-1  absolute top-0 left-0  bg-blue text-white text-sm">
                      New
                    </span>
                    <div className="absolute space-y-2 bottom-[15px] right-[25px] opacity-0 group-hover:opacity-100 duration-200 transition ">
                      <div>
                        <Link to={"#"}>
                          <i className="fa-regular fa-heart p-2 rounded-full bg-white  text-ctext2 hover:text-green duration-200 hover:border-green "></i>
                        </Link>
                      </div>
                      <div>
                        <Link to={"#"}>
                          <i class="fa-regular fa-eye p-2 rounded-full bg-white text-ctext2 hover:text-green duration-200 hover:border-green"></i>
                        </Link>
                      </div>
                      <div>
                        <Link to={"#"}>
                          <i class="fa-solid fa-cart-shopping p-2 rounded-full bg-white text-ctext2 hover:text-green duration-200 hover:border-green"></i>
                        </Link>
                      </div>
                      <div>
                        <Link to={"#"}>
                          <i class="fa-regular fa-eye p-2 rounded-full bg-white text-ctext2 hover:text-green duration-200 hover:border-green"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="w-full space-y-4 mt-3">
                    <p className="font-Mulish leading-[14px] text-c3 uppercase text-xs">
                      {newdata.name}
                    </p>
                    <p className="font-Rubik text-xl font-normal leading-6 text-[#555555]">
                      {" "}
                      {newdata.dep}
                    </p>
                    <div className="flex flex-wrap justify-between items-center">
                      <div className="flex items-center gap-2">
                        <p className="font-Mulish text-lg md:text-xl leading-5 text-green ">
                          {newdata.price}
                        </p>
                        <p className="font-Mulish text-base text-[14px] leading-5 text-[#CCCCCC]">
                          <del> {newdata.del}</del>
                        </p>
                      </div>
                      <div className="flex  items-center ">
                        <i class="fa-solid fa-star text-[8px] md:text-xs  text-green"></i>
                        <i class="fa-solid fa-star text-[8px] md:text-xs text-green"></i>
                        <i class="fa-solid fa-star text-[8px] md:text-xs text-green"></i>
                        <i class="fa-solid fa-star text-[8px] md:text-xs text-green"></i>
                        <i class="fa-regular fa-star text-[8px] md:text-xs text-green"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NewProducts;
