import React from 'react'
import burgerVector from "./../../public/burgerVector.png"

const About = () => {
  return (
    <div className='col-span-12 bg-[#222831] h-[80vh] w-full relative top-[60vh] grid grid-cols-2'>
        <div className="vector ">
            <img src={burgerVector} alt="" className="scale-50 bg-contain"  />
        </div>
        <div className=" ">

        </div>
    </div>
  )
}

export default About
