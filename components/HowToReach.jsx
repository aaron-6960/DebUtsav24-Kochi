import React from 'react'

const HowToReach = () => {
  return (
    <div className="relative p-4">
      <div className='m-auto container font-generalSans flex justify-center flex-col items-center pt-[80px] text-our_white'>
      <h4 className='text-3xl md:text-5xl text-center text-gray-light w-full font-semibold mb-4'>How To<span className='text-red'> Reach</span></h4>
        <div className='flex flex-col gap-2'>
          <h3 className='text-2xl font-semibold'>Overview</h3>
          <p>
            Govt. Model Engineering College (MEC) is located in Thrikkakara, Kerala. This page provides information on how to reach MEC from various key locations.
          </p>
          <h3 className='text-2xl font-semibold mt-3'>Address</h3>
          <p>
            G28HH+8CR, Model Engineering College Road, Karimakkad, Thrikkakara, Edappally, Kochi, Kerala 682021
          </p>
          <h3 className='text-2xl font-semibold mt-3'>Bus from Edappally Toll</h3>
          <p>
          Go to the bus stop on the side of saravanna bhavan, which is a road that goes from Highway towards our college, get in on the bus going from there, drop at Thrikkakara Amabalam Stop. Walk a distance of nearly 500m to reach MEC.
          </p>
          <h3 className='text-2xl font-semibold mt-3'>Travel Plan from Railway Stations</h3>
          <p>
            Ernakulam Junction (ERS), Ernakulam Town (ERN), Tripunithura Railway Station & Aluva Railway Station has a nearby metro station. Board a metro train towards Edappally. Drop off at Edappally and book a cab or auto towards MEC
          </p>
        </div>
      </div>
    </div>
  )
}

export default HowToReach