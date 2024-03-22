"use client"

import Image from "next/image";

export default function Navbar() {
    return (
      <nav className="bg-transparent text-white py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center opacity-0 scale-95 animate-[fadeIn_1.5s_ease-out_forwards]">
            {/* Replace the src attribute of the img tag with your logo's path */}
            <Image src="/Logo.png" alt="Logo" width={'220'}  height={'110'}/>
          </div>
        </div>
      </nav>
    );
  }
  