"use client"
import React from 'react';

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-16 xl:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
          <h1 className="text-3xl font-pro text-[#EA580C] py-4 text-center px-12 opacity-0 scale-95 animate-[fadeIn_1.5s_ease-out_forwards]"
    style={{
      textShadow: '-2px 2px 0px white', // Adding white text shadow offset by x-4px and y-4px
    }}>
  ANNOUNCING AT NFT NYC APRIL 4TH AT 4:20 PM
</h1>

          </div>
        </div>
      </div>
    </section>
  )
}