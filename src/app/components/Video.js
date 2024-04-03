"use client"

import React from 'react'

export default function Component() {
  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center gap-4 min-h-[calc(100vh_-_theme(spacing.[">
        <div className="max-w-prose prose prose-lg sm:prose-xl lg:prose-2xl dark:prose-invert">
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-6xl lg:text-7xl/none">Made by Hand</h1>
            <p className="text-xl text-gray-500 dark:text-gray-400">
            4444 Unique Heroes all crafted by a human hand
            </p>
          </div>
        </div>
        <video
          alt="Hero"
          className="aspect-square rounded-xl object-cover overflow-hidden border w-full max-w-[400px] dark:border-gray-850"
          height="550"
          width="550"
          autoPlay 
          muted 
          loop 
          controls 
          src="/trailer.mp4"
        />
      </div>
    </section>
  )
}

