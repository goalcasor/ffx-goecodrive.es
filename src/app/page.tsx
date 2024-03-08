'use client'
import React, { useState, useEffect } from 'react';
import HeroSection from "@/components/home-sections/HeroSection";
import SectionOne from "@/components/home-sections/SectionOne";
import SectionTwo from "@/components/home-sections/SectionTwo";
import SectionThree from "@/components/home-sections/SectionThree";
import SectionFour from "@/components/home-sections/SectionFour";
import SectionFive from "@/components/home-sections/SectionFive";
import SectionSix from "@/components/home-sections/SectionSix";
import SectionSeven from "@/components/home-sections/SectionSeven";

export default function Home() {
  const [videoEnded, setVideoEnded] = useState<boolean>(false);
  useEffect(() => {
    const videoFinalizado = localStorage.getItem('videoFinalizado');
    if (videoFinalizado === 'true') {
        setVideoEnded(true);
    }
}, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <HeroSection />
        <SectionOne 
          videoEnded={videoEnded} 
          setVideoEnded={setVideoEnded} 
        />
        {videoEnded && (
            <>
              <SectionSix />
              <SectionThree />
              <SectionTwo />
              <SectionFour />
              <SectionFive />
              <SectionSeven />
            </>
        )}
    </main>
  );
}
