import React from 'react'
import Image from 'next/image'

const Background = () => {
  return (
    <div><Image
    src="/bg.png" // 
    objectFit="cover"
    quality={100}
     
    layout="fill"
    alt="bg"
  /></div>
  )
}

export default Background