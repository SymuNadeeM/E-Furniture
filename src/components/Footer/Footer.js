import React from "react";

const Footer = () => {
  return (
    <>
      <div className="px-[15px] mt-[50px] md:px-[55px] mx-auto py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[30px]">
          <div className="space-y-4">
            <div className="flex items-center gap-1">
              <i class="fa-solid  fa-user-secret text-2xl text-green"></i>
              <h2 className="font-Rubik text-xl font-semibold leading-7">
                Furniking
              </h2>
            </div>
            <p className="text-[#555555] text-sm leading-8 font-Rubik font-normal">
              Funking is the a popular Ecommerce site. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
            <div className="flex items-center gap-8">
              <i className="fa-brands fa-facebook text-green"></i>
              <i className="fa-brands fa-twitter text-green"></i>
              <i className="fa-brands fa-square-instagram text-green"></i>
              <i className="fa-brands fa-pinterest-p text-green"></i>
            </div>
          </div>
          <div>
            <ul className="space-y-4 text-[#555555] text-sm">
              <li className="text-[#555555] text-lg font-medium">Help</li>
              <li>Privacy Policey</li>
              <li>Shipping & Delivery</li>
              <li>Refund Policy</li>
              <li>Track Your Order</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-4 text-[#555555] text-sm">
              <li className="text-[#555555] text-lg font-medium">Store</li>
              <li>Furniture</li>
              <li>Tabble</li>
              <li>Sofa</li>
              <li>Other</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-4 text-[#555555] text-sm">
              <li className="text-[#555555] text-lg font-medium">Supports</li>
              <li>Feedback</li>
              <li>Contact us</li>
              <li>Download app</li>
              <li>Terms conditions</li>
            </ul>
          </div>
        </div>
        <hr className="my-[50px] text-[#969696] h-[1px]" />
        <div className="grid grid-cols-2 justify-center">
          <p className="font-Rubik text-xs md:text-sm text-[#555555]">
            © 2021 Funking - All rights reserved.
          </p>
          <div className="flex items-center justify-end gap-8 text-xs md:text-sm text-[#555555]">
            <p>Privacy</p>
            <p>Security</p>
            <p>Terms</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
