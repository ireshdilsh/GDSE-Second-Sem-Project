import React from 'react'
import '../styles/landing.css'
import bgVideo from '../assets/Green Aesthetic Forest Nature Video.mp4'

export default function Landing() {
  return (
    <div>

      <video src={bgVideo} autoPlay loop muted>
      </video>
    
    </div>
  )
}
