import React from "react";
import Navbar from "./Navbar";
import homeImg from "./../../public/homeImg.png";
import cocImg from "./../../public/cocImg.png";


const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#0d0e10] via-[#2e3336] to-[#3f4649] h-[90vh] col-span-12">
        <Navbar />

        <div className="grid grid-cols-12 text-white">
          <div className="col-span-5 col-start-2">
            <h1 className="text-5xl font-semibold my-4 py-3">
              Fast Food Restaurant
            </h1>
            <p className="my-4 text-md py-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur esse perspiciatis asperiores nihil voluptate cumque
              excepturi aspernatur vero itaque enim!
            </p>
            <div className="orderBtn w-fit bg-yellow-400 px-6 py-2 shadow-lg rounded-2xl">
              Order Now
            </div>
          </div>

          <div className="col-span-5  justify-center items-center ">
            <div className="relative scale-[1] aspect-auto grid justify-center items-center ">
              <img src={homeImg} alt="" className="object-fit" />
            </div>
            {/* <div className="absolute top-[4%] left-[25%] scale-50">
              <img src={cocImg} alt="" className=" " />
            </div> */}
          </div>
        </div>


      </div>
    </>
  );
};
export default Home;
