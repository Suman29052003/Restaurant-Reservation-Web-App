import React from "react";
import mainLogo from "./../../public/mainLogo.jpg"

const navbar = () => {
  return (
    <div className="col-span-12 h-min">
      <div className=" w-full text-sm bg-transparent text-white p-3 sm:flex items-center justify-around hidden ">
        {/* Nav Logo */}
        <div className="logo w-[100px]  bg-contain">
        <img src={mainLogo} alt="" className="bg-blend-overlay rounded-[50%]" />
        </div>
        {/* Nav Links */}
        <div className="links list-none flex gap-6 ml-4">
          <li className=" font-semibold cursor-pointer duration-300 hover:text-yellow-400">HOME</li>
          <li className=" font-semibold cursor-pointer duration-300 hover:text-yellow-400">MENU</li>
          <li className=" font-semibold cursor-pointer duration-300 hover:text-yellow-400">ABOUT</li>
          <li className=" font-semibold cursor-pointer duration-300 hover:text-yellow-400">BOOK TABLE</li>
        </div>
        {/* Nav Icons */}
        <div className="icons flex ">
        <span class="m-2 material-symbols-outlined  cursor-pointer duration-300 hover:text-yellow-400 ">shopping_cart</span>
        <span class="m-2 material-symbols-outlined  cursor-pointer duration-300 hover:text-yellow-400 ">Person</span>
        <span class="m-2 material-symbols-outlined  cursor-pointer duration-300 hover:text-yellow-400 ">Search</span>
        </div>
        {/* Nav Order Button */}
        <div className="orderBtn w-fit bg-yellow-400 px-4 py-2 shadow-lg rounded-2xl hover:scale-105 duration-100">Order Online</div>

      </div>
    </div>
  );
};

export default navbar;
