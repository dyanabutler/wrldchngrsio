import React from 'react'
import Image from 'next/image'

const Background = () => {
  return (
    <div><Image
    src="/bg-1.svg" // 
    objectFit="cover"
    quality={100}
    style={{ backgroundSize: "contain" }}
    width={1536}
    height={840 }
    alt="bg"
  /></div>
  )
}

export default Background