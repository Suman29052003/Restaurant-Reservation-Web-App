import React from "react";
import burger from "./../../public/burger.png";
import pizza from "./../../public/pizza.jpg";

const OfferPage = () => {
  return (
    <div className="col-span-12 h-[30vh] grid sm:grid-cols-2 justify-center items-center  sm:gap-8">
      <div className="grid justify-center items-center">
        <div className=" bg-[#233] p-6 px-16 flex rounded-lg sm:m-8 m-4 ">
          <img
            src={burger}
            alt=""
            className="w-[20%] rounded-full border-[3px] border-yellow-300"
          />
          <div className="flex flex-col ml-4 text-white font-medium text-lg justify-center ">
            <span className="">Tasty Sunday</span>
            <span>20% Off</span>
            <div
              className="orderBtn w-fit bg-yellow-400 px-2 py-1 shadow-lg rounded-2xl mt-2 flex
justify-center items-center"
            >
              Order Online
              <span class="m-2 material-symbols-outlined  cursor-pointer duration-300 hover:text-yellow-400 ">
                shopping_cart
              </span>
            </div>
          </div>
        </div>
      </div>



      <div className="grid justify-center items-center">
        <div className=" bg-[#233] p-6 px-16 flex rounded-lg sm:m-8 m-4 ">
          <img
            src={pizza}
            alt=""
            className="w-[20%] rounded-full border-[3px] border-yellow-300"
          />
          <div className="flex flex-col ml-4 text-white font-medium text-lg justify-center ">
            <span className="">Tasty Sunday</span>
            <span>20% Off</span>
            <div
              className="orderBtn w-fit bg-yellow-400 px-2 py-1 shadow-lg rounded-2xl mt-2 flex
justify-center items-center"
            >
              Order Online
              <span class="m-2 material-symbols-outlined  cursor-pointer duration-300 hover:text-yellow-400 ">
                shopping_cart
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferPage;
