import React from 'react'
import Image from 'next/image'

const Poster = () => {
  return (
    <div><Image
    src="/poster.png" // 
    objectFit="cover"
    quality={100}
    style={{ backgroundSize: "contain" }}
    width={480}
    height={720 }
    alt="bg"
  /></div>
  )
}

export default Poster