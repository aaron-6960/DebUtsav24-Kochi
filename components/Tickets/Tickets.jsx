import React from 'react'
import Image from "next/image";
import Ticket from "@/assets/Ticket.png"

function Tickets() {
  return (
    <div className="max-w-screen-xl flex flex-col px-4 py-8 mx-auto lg:gap-8 justify centre items-center">
      <h1 className="text-4xl font-bold text-center mb-20">Tickets</h1>
      {/*<div
        className="relative rounded-full bg-red/[.1] md:my-[40px] p-4 text-left border-[2px] border-red flex flex-col overflow-hidden w-[60vw] min-w-[398px] justify-center items-center py-20"
        data-aos="fade-up"
      >
        <span className="font-generalSans text-gray-light font-[500] text-pretty text-center"></span>
        <h2 className="text-[2rem]">Total Tickets : 80</h2>
        <h2 className="text-[2rem]">Student Ticket: 199₹</h2>
        <h2 className="text-[2rem]">Open Ticket: 299₹</h2>
      </div>*/}
      <Image src={Ticket} alt="true" className="" />
    </div>
  );
}

export default Tickets