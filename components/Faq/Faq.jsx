"use client";
import React, { useEffect } from "react";
import FaqCard from "./FaqCard";
import { FaqData } from "@/constants";
import AOS from "aos";
import "aos/dist/aos.css";

const Faq = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS on component mount
    AOS.refresh(); // Refresh AOS initially
  }, []);

  const refreshAOSWithDelay = (delay) => {
    setTimeout(() => {
      AOS.refresh();
    }, delay);
  };

  return (
    <div
      id="faq"
      className="min-h-screen flex flex-col justify-center items-center pt-[168px] max-sm:pt-[80px] px-[40px] max-sm:px-[27px]"
    >
      <h1
        className="mirror-vertical mb-[50px] sm:mb-[100px] text-white text-[80px] leading-[75px] scale-[0.6] sm:scale-[0.8] lg:scale-100 font-[700] font-orbitron"
        data-text="F.A.Q"
      >
        F.A.Q
      </h1>
      {FaqData.map((data, i) => (
        <div className="mb-[10px] sm:mb-[16px]" data-aos="fade-right" key={i}>
          <FaqCard
            question={data.question}
            answer={data.answer}
            AOSrefresh={refreshAOSWithDelay}
          />
        </div>
      ))}
    </div>
  );
};

export default Faq;
