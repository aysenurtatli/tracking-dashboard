import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TimeTrackingDashboard from './components/TimeTrackingDashboard'
import './App.css'

function App() {

  return (
    <div className='md:h-screen h-auto flex items-center'>
      <TimeTrackingDashboard/>
    </div>
  )
}

export default App
