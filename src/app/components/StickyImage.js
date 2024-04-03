"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import '../globals.css';

export default function StickyFadeOutImage() {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            // Adjust the fade-out effect here. You can change '200' to the desired fade-out scroll distance.
            const scrollDistance = 200;
            const newOpacity = Math.max(1 - window.scrollY / scrollDistance, 0);
            setOpacity(newOpacity);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <Image 
              src="/bg-1.svg" 
              alt="Descriptive Alt Text" 
              layout='fill'
              className="sticky-image" 
              style={{ opacity, zIndex: -1 }} // Inline style for z-index
            />
            
        </div>
    );
}
