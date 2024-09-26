"use client"
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

const TimelineCard = ({item, mobile, index}) => {
  return (
    <TimelineItem>
      {!mobile && (
        <TimelineOppositeContent color="text.secondary" className='text-gray-light text-base' sx={{ m: "auto 0" }}>
          {item.time}
        </TimelineOppositeContent>
      )}
      <TimelineSeparator>
        {index==0 ? 
          <TimelineConnector style={{backgroundColor: 'transparent'}} />
        : <TimelineConnector style={{backgroundColor: 'rgba(204,24,72, 0.3)'}} />
        }
        <TimelineDot style={{backgroundColor: 'rgba(204,24,72, 0.3)'}} className='bg-opacity-30'>
            <div style={{backgroundColor: '#CC1848'}} className='size-[8px] rounded-full'/>
        </TimelineDot>
        {index==4 ? 
          <TimelineConnector style={{backgroundColor: 'transparent'}} />
        : <TimelineConnector style={{backgroundColor: 'rgba(204,24,72, 0.3)'}} />
        }
      </TimelineSeparator>
      <TimelineContent sx={{ m: "auto 0" }}>
        <div
          className='relative rounded-full bg-red/[.1] md:my-[40px] p-4 text-left border-[2px] border-red flex flex-col overflow-hidden '
          data-aos="fade-up"
        >
          <span className='font-generalSans text-gray-light text-base font-[500]'>
            {item.title}
          </span>
          {mobile && (
            <span className='font-generalSans text-base text-gray-light font-[500]'>{item.time}</span>
          )}
        </div>
      </TimelineContent>
    </TimelineItem>
  )
}

export default TimelineCard