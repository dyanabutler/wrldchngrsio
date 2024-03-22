"use client"

import React from 'react'

const Video = () => {
    return (
      <div className="flex flex-col items-center  justify-center w-full mt-24 space-y-4">
        <div className="text-center mb-4">
          <h2 className="text-xl md:text-2xl font-bold font-pro">Made by Hand</h2>
          </div>
        <video 
          className="w-full max-w-[500px] rounded-md" 
          autoPlay 
          muted 
          loop 
          controls 
          src="/trailer.mp4">
          Your browser does not support the video tag.
        </video>
        <div className="text-center mb-10">
          
          <p className="mt-2 text-sm md:text-base">Discover the future of digital collectibles with our cutting-edge solutions designed to transform your world.</p>
        </div>
      </div>
    );
}

export default Video;

  