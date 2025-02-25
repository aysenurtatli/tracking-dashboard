import React from 'react'
import profileImage from '../../../assets/images/image-jeremy.png'


const ProfileCard = ({selectedTimeframe, onTimeframeChange }) => {
    const timeframes = ["daily", "weekly", "monthly"];
  return (
    <div className="h-full flex flex-col">
  <div className="flex-grow flex flex-row sm:flex-col bg-[#5747EA] rounded-2xl p-[32px] z-10">
    <div className='flex flex-row md:flex-col gap-3'>
    <div className='my-auto'>
    <img
      src={profileImage}
      alt="profile-image"
      className="border-4 border-white rounded-full w-[78px] shadow-lg"
    />
    </div>
    <div className='md:mt-[40px] mt-0 flex flex-col justify-center'>
      <p className="text-[#BBC0FF] text-[15px]">Report For</p>
      <p className="text-white font-light text-[24px] md:text-[40px]">Jeremy Robson</p>
    </div>
    </div>
  </div>

  <div className="bg-[#1C204B] flex flex-col gap-[21px] flex-none rounded-b-2xl p-[32px] relative top-[-8px] z-2">
    {timeframes.map((timeframe) => (
      <a
        key={timeframe}
        className={`${
          selectedTimeframe === timeframe ? "text-white" : "text-[#7078C9]"
        } text-lg cursor-pointer hover:text-white duration-200`}
        onClick={() => onTimeframeChange(timeframe)}
      >
        {timeframe}
      </a>
    ))}
  </div>
</div>

  )
}

export default ProfileCard