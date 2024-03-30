import React from 'react'
import Navbar from './Navbar'
const Home = () => {
  return (
    <>
    <div className='bg-gradient-to-r from-[#0d0e10] via-[#2e3336] to-[#3f4649] h-[90vh] grid grid-cols-12'>
      <Navbar />

    <div className="col-span-4">
    <h1 className=''>my Restaurant</h1>
    </div>



    <div className="col-span-8">
    hello
    </div>


    </div>
    </>
  )
}
export default Home
