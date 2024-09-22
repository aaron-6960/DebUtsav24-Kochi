import Amico from "@/assets/Conference-amico.svg";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Landing = () => {
  return (
    <div id="home" className="min-h-screen container m-auto flex justify-center items-center">
        <div className=" text-gray-light mt-10 sm:mt-10 lg:mt-10  pt-16 md:mt-10 xl:mt-4 md:pt-10  ">
        <div className="grid max-w-screen-xl min-h-[100vh]  px-4  mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1
              className="max-w-2xl mb-4 text-3xl font-semibold  text-gray-light md:text-6xl xl:text-7xl  "
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              Welcome to <br /> <span className="text-red">DebUtsav</span> 2024
            </h1>
            <div
              data-aos="fade-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              data-aos-delay="400"
              className="flex gap-2 mt-4"
            >
              <FaCalendarAlt className="text-[24px] text-gray-light"/>
              <p className="text-xl font-semibold mb-2">October 2nd 2024</p>
            </div>

            <div
              className="flex gap-2 mb-2"
              data-aos="fade-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              data-aos-delay="400"
            >
              <IoLocationSharp className="text-[24px] text-gray-light"/>
              <p className="text-xl font-semibold mb-2">
                Model Engineering College , Thrikkakara
              </p>
            </div>
            <p
              data-aos="fade-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              data-aos-delay="500"
              className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
            >
              DebUtsav is an upcoming conference that is set to bring together
              members of the Debian community to celebrate Free and Open Source
              Software (FOSS).
            </p>
            <div className="flex gap-2">
              <Link href="/#">
                <button className="inline-flex register bg-red text-white  text-red-500 items-center justify-center px-10 py-3 mr-3 text-xl font-medium text-center   bg-primary-700 hover:bg-primary-800 ">
                  Register
                </button>
              </Link>
              <Link href="/#about">
                <button className="inline-flex register bg-transparent outline-red outline text-red  items-center justify-center px-10 py-3 mr-3 text-xl font-medium text-center">
                  About
                </button>
              </Link>
            </div>
          </div>
          <div className=" lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              data-aos="fade-zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              data-aos-delay="800"
              src={Amico}
              alt="mockup"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing;