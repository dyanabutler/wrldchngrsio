"use client"
import Image from "next/image";
import { CardContent, Card } from "@/components/ui/card";

// Adjust the function signature to accept props
export default function CardComponent({ title, description, imgSrc }) {
    return (
      <Card>
        <CardContent className="flex flex-col gap-2 p-4 bg-[#FEBC11]">
          {/* Next.js Image component for optimized and responsive images */}
          <div className="relative w-full h-[275px] rounded overflow-hidden bg-black">
            <Image
              alt="Cover"
              src={imgSrc}
              layout="fill" // This makes the image cover the div, maintaining aspect ratio
              objectFit="cover" // This ensures the image covers the area, similar to background-size: cover;
              className="rounded"
            />
          </div>
          <div className="flex-1 flex flex-col gap-1">
            <h2 className="text-lg text-[#EA580C]">{title}</h2>
            <p className="text-sm text-black">{description}</p>
          </div>
        </CardContent>
      </Card>
    );
  }
  