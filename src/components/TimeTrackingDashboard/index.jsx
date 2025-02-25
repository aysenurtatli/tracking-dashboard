import React from 'react'
import { useState } from 'react'
import ProfileCard from './ProfileCard'
import TrackingCard from './TrackingCard'
import data from '../../../data/data.json'
import exercise from '../../assets/images/icon-exercise.svg'
import play from '../../assets/images/icon-play.svg'
import selfcare from '../../assets/images/icon-self-care.svg'
import social from '../../assets/images/icon-social.svg'
import study from '../../assets/images/icon-study.svg'
import work from '../../assets/images/icon-work.svg'

const TimeTrackingDashboard = () => {
    const [selectedTimeframe, setSelectedTimeframe] = useState("daily")
        const tracks = [
            {
              name: "exercise",
              url: exercise,
              background: "#4BCF82"
            },
            {
              name: "play",
              url: play,
              background: "#55C2E6"
            },
            {
              name: "Self Care",
              url: selfcare,
              background: "#F1C75B"
            },
            {
              name: "social",
              url: social,
              background: "#7335D2"
            },
            {
              name: "study",
              url: study,
              background: "#FF5E7D"
            },
            {
              name: "work",
              url: work,
              background: "#FF8B64"
            },
          ];

          const track = tracks.map((t) => t.background)
          
          const trackIcon = tracks.map((t) => t.url)
          console.log(trackIcon)
    
  return (
    <main className='max-w-6xl mx-auto'>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[30px] p-4">
        <div className=" md:row-span-3 lg:row-span-2 h-full">
        <ProfileCard selectedTimeframe={selectedTimeframe} onTimeframeChange={setSelectedTimeframe} />
        </div>
  
        {data.map((dt, index) => {
                    const track = tracks.find(t => t.name.toLowerCase() === dt.title.toLowerCase());
                    return (
                        <TrackingCard 
                            key={index} 
                            title={dt.title} 
                            backgroundColor={track?.background} 
                            icon={track?.url}  
                            timeframes={dt.timeframes} 
                            selectedTimeframe={selectedTimeframe} 
                        />
                    );
                })}
    </div>
  </main>
  
  )
}

export default TimeTrackingDashboard