import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-12 bg-transparent flex list-none items-center justify-around text-white pt-6 text-lg">
        {/* Restaurant Logo */}
      <div className="logo font-[Ruthie,cursive] text-4xl text-yellow-400 cursor-pointer">
        <h1>my Restaurant</h1>
      </div>

         {/* Navigation Buttons */}
      <div className="font-[Roboto Condensed, sans-serif] flex gap-10">
          <li className="cursor-pointer hover:text-yellow-400 duration-150">Home</li>
          <li className="cursor-pointer hover:text-yellow-400 duration-150">Menu</li>
          <li className="cursor-pointer hover:text-yellow-400 duration-150">About</li>
          <li className="cursor-pointer hover:text-yellow-400 duration-150">Book Table</li>
      </div>

         {/* Login/Sign up Button */}
      <div className="flex gap-5">
          <li className="cursor-pointer">
            <span class="material-symbols-outlined hover:text-yellow-400 duration-150">person</span>
          </li>
          <li className="cursor-pointer">
            <span class="material-symbols-outlined hover:text-yellow-400 duration-150">shopping_cart</span>
          </li>
          <li className="cursor-pointer">
            <span class="material-symbols-outlined hover:text-yellow-400 duration-150">search</span>
          </li>
      </div>

        {/* Order Online Button */}
    <div className="font-[Roboto Condensed, sans-serif] flex bg-yellow-400 px-5 py-2 rounded-3xl cursor-pointer hover:scale-[1.1] hover:bg-yellow-500 duration-150">
        <span>Order Online</span>
    </div>

    </div>
  );
};

export default Navbar;
