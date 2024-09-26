"use client";
import TimelineCard from "./TimelineCard";
import { TimelineData } from "@/constants";
import { timelineItemClasses } from "@mui/lab";
import Timeline from '@mui/lab/Timeline';

const TimelineSection = () => {
  return (
    <div  id="timeline" className="relative p-2">
      <div className='m-auto container font-generalSans flex justify-center flex-col items-center pt-[80px] text-our_white'>
      <h4 className='text-3xl md:text-5xl text-center text-gray-light w-full font-semibold mb-4'>Time<span className='text-red'>line</span></h4>
        <div className="w-[900px] max-lg:w-[800px] max-md:w-[500px] max-sm:w-[350px] md:scale-110" data-aos="zoom-in-up">
          <Timeline position="alternate-reverse" className="max-md:hidden">
            {TimelineData.map((item, index) => (
              <TimelineCard item={item} key={index} index={index} mobile={false}/>
            ))}
          </Timeline>
          {/* timeline for smaller devices */}
          <Timeline position="right" className="md:hidden"
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            {TimelineData.map((item, index) => (
              <TimelineCard item={item} key={index} index={index} mobile={true}/>
            ))}
          </Timeline>
        </div>
      </div>
    </div>
  )
}

export default TimelineSection