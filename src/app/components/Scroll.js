import React from 'react'

const Scroll = () => {
  return (
    <div className="flex flex-col items-center gap-2 animate-bounce mt-2 mb-2 px-6">
    <span className="text-lg">Scroll down</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d="M12 2v14"></path>
      <path d="m19 9-7 7-7-7"></path>
      <circle cx="12" cy="21" r="1"></circle>
    </svg>
  </div>
  )
}

export default Scroll