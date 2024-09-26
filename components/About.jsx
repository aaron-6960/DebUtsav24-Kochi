"use client";
import React from "react";
import Image from "next/image";
import debutsav from "@/assets/logo.svg";
import foss from '../assets/foss.jpeg';

const About = () => {
  return (
    <div
      id="about"
      className="grid m-auto py-[80px] min-h-dvh px-5 max-w-screen-xl grid-cols-1 md:grid-cols-2 gap-10"
    >
      <Image
        src={debutsav}
        className="hidden md:block mx-auto my-auto  md:h-80 "
        alt=""
        width={300}
        height={320}
        data-aos="fade-up"
      />
      <div className="text-left">
        <h2 className="text-3xl md:text-5xl md:text-left text-white font-semibold py-4">
          About <span className="text-red">DebUtsav</span>
        </h2>
        <p className="text-lg tracking-wide  md:text-lg" data-aos="fade-right">
          Debutsav'24 is a one-day mini-Debian conference hosted by FOSSMEC, the
          Free and Open Source Software community at MEC. This event is designed
          to bring together enthusiasts and newcomers alike to explore the
          principles of Free Software and the vital role Debian plays in the
          tech landscape. Participants will engage in informative sessions,
          hands-on cohort activities, and collaborative sprints, all aimed at
          enhancing skills and fostering contributions to Debian projects.
          Whether you’re looking to improve documentation, tackle coding
          challenges, or simply learn more about open-source, Debutsav'24 is the
          perfect opportunity to connect, collaborate, and innovate within a
          welcoming community. Join us for a day of inspiration,
          learning, and fun!
        </p>
      </div>

      <div className="text-left">
        <h2 className="text-3xl md:text-5xl text-left  text-white font-semibold py-4">
          About <span className="fossmec">FOSS MEC</span>
        </h2>
        <p className="text-lg md:text-lg tracking-wide" data-aos="fade-up">
          The Free and Open Source Cell at Model Engineering College
          Kochi(FOSSMEC) is an organization run by a bunch of enthusiastic
          students who promote the use of free and open-source software (FOSS).
          The organization aims to raise awareness about the benefits of FOSS
          and encourage its adoption by everyone. The FOSS Cell conducts regular
          workshops and training programs on various FOSS tools and
          technologies. These events give its attendees the opportunity to learn
          about FOSS from experts, stay up-to-date on the latest developments,
          and explore career opportunities in the field. The FOSS Cell is an
          active and vibrant organization that is committed to promoting the use
          of FOSS and providing students with the skills and knowledge they need
          to succeed in this exciting and rapidly growing field.
        </p>
      </div>
      <Image
        src={foss}
        className="mx-auto hidden md:block my-auto rounded-full md:h-80"
        alt=""
        width={320}
        height={320}
        data-aos="fade-up"
      />
    </div>
  );
};

export default About;