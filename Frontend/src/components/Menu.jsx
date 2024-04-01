import React, { useState } from "react";
import card_burger from "./../../public/card_burger.jpg";
import card_french_fries from "./../../public/card_french_fries.jpg";
import card_pizza from "./../../public/card_pizza.jpg";
import card_pasta from "./../../public/card_pasta.jpg";
import card_barbecueChickenPizza from "./../../public/card_barbecueChickenPizza.png";
import card_beefStack from "./../../public/card_beefStack.jpg";
import card_CreamCarbonaraTwist from "./../../public/card_CreamCarbonaraTwist.jpg";
import card_GarlicParmesanDelight from "./../../public/card_GarlicParmesanDelight.jpg";
import card_MargheritaDelight from "./../../public/card_MargheritaDelight.jpg";
import card_SavoryChickenSandwich from "./../../public/card_SavoryChickenSandwich.jpg";
import card_SpicyArrabbiataSurprise from "./../../public/card_SpicyArrabbiataSurprise.jpg";
import card_SupremeVeggieFeast from "./../../public/card_SupremeVeggieFeast.jpg";

// Define an array of card objects with correct image imports
const cardsObj = [
  {
    img: card_SavoryChickenSandwich,
    title: "Savory Chicken Sandwich",
    des: "Sink your teeth into a mouthwatering chicken sandwich with crispy bacon and tangy barbecue sauce.",
  },
  {
    img: card_beefStack,
    title: "Mighty Beef Stack",
    des: "Indulge in a towering beef burger loaded with melted cheese, caramelized onions, and zesty chipotle mayo.",
  },
  {
    img: card_MargheritaDelight,
    title: "Margherita Delight",
    des: "Treat yourself to a classic Margherita pizza topped with fresh tomatoes, basil, and creamy mozzarella.",
  },
  {
    img: card_SupremeVeggieFeast,
    title: "Supreme Veggie Feast",
    des: "Dive into a veggie-packed pizza loaded with bell peppers, mushrooms, olives, and onions.",
  },
  {
    img: card_CreamCarbonaraTwist,
    title: "Creamy Carbonara Twist",
    des: "Experience pasta perfection with creamy carbonara sauce, crispy pancetta, and a sprinkle of Parmesan cheese.",
  },
  {
    img: card_SpicyArrabbiataSurprise,
    title: "Spicy Arrabbiata Surprise",
    des: "Spice up your day with a fiery Arrabbiata pasta topped with spicy sausage and fresh herbs.",
  },
  {
    img: card_GarlicParmesanDelight,
    title: "Garlic Parmesan Delight",
    des: "Savor the irresistible flavor of garlic parmesan fries served hot and crispy with a sprinkle of parsley.",
  },

  {
    img: card_barbecueChickenPizza,
    title: "barbecue chicken pizza",
    des: "Feast on a barbecue chicken pizza loaded with tender chicken, barbecue sauce, red onions, and cilantro.",
  },

  {
    img: card_burger,
    title: "Zesty Fish Burger",
    des: "Enjoy a burst of flavor with a crispy fish burger topped with spicy slaw and tangy tartar sauce.",
  },
  {
    img: card_french_fries,
    title: "Loaded Nacho Extravaganza",
    des: "Get your taste buds dancing with loaded nacho fries topped with melted cheese, jalapenos, and sour cream.",
  },
  {
    img: card_pasta,
    title: "Pasta",
    des: "Discover the perfect harmony of flavors in a pesto chicken pasta topped with sun-dried tomatoes and pine nuts.",
  },
  {
    img: card_pizza,
    title: "Delicious Pizza",
    des: "Indulge in truffle parmesan fries drizzled with truffle oil and sprinkled with grated Parmesan cheese.",
  },
];

const Menu = () => {
  const [seeMore, setSeeMore] = useState(-1);

  return (
    <>
      <div className="relative top-8 text-3xl font-bold mb-4 col-span-full text-center p-8">
        Our Menu
      </div>
      <div className="menu w-full h-[100vh] flex justify-center col-start-1 col-end-12 ">
        <div className="w-[80%] grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 ">
          {cardsObj.map((card, index) => (
            <div key={index} className="card scale-50 sm:scale-75 md:scale-100 ">
              <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                  <img
                    src={card.img}
                    alt="img-blur-shadow"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {card.title}
                  </h5>
                  <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    {card.des.length > 30
                      ? `${card.des.slice(0, 30)}...`
                      : card.des}
                    {card.des.length > 30 && (
                      <span
                        className="text-blue-500 cursor-pointer"
                        // onClick={setSeeMore(seeMore === index ? -1 : index)}
                      >
                        See More
                      </span>
                    )}
                    
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <button
                    className="select-none rounded-lg bg-yellow-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
