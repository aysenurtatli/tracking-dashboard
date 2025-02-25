import React from 'react'
import dots from '../../../assets/images/icon-ellipsis.svg'


const TrackingCard = ({ image, title, timeframes, selectedTimeframe, backgroundColor, icon}) => {
    const current = timeframes[selectedTimeframe].current;
    const previous = timeframes[selectedTimeframe].previous

  
  return (
    <div>
      <div className='flex items-center justify-end max-h-[3.75rem] min-h-[3.75rem]  pr-4 overflow-hidden rounded-t-2xl' style={{backgroundColor: backgroundColor}}>
      <img src={icon} alt={`${title} icon`}/>
      </div>
         <div className='text-white bg-[#1C204B] hover:bg-[#33397A] duration-200 cursor-pointer rounded-2xl w-full md:h-[199px] h-[122px] p-[30px] relative -top-4 '>
                <div className='flex justify-between'>
                    <h4 className='text-lg font-medium'>{title}</h4>
                    <button className='cursor-pointer'>
                        <img src={dots}></img>
                    </button>
                </div>
                <div className='flex flex-row md:flex-col items-center md:items-start justify-between'>
                    <span className='text-[32px] md:text-[56px] font-light'>{current}hrs</span>
                    <span className='text-[#BBC0FF] text-[15px]'>Last Week - {previous}hrs</span>
                </div>
        </div>
    </div>
  )
}

export default TrackingCard