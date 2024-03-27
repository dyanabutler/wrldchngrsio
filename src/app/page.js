import Image from "next/image";
import Navbar from "./components/Navbar";
import EmailForm from "./components/EmailForm";
import Hero from "./components/Hero";
import Video from "./components/Video";
import Scroll from "./components/Scroll";
import FaqComponent from "./components/Faq";
import HeroCards from "./components/HeroCards";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="background-image w-full" style={{ backgroundImage: `url(/bg-1.svg)`, backgroundSize: "cover", backgroundPosition: "top center" }}>
        <Navbar />
        <Hero />
        <EmailForm />
        <Scroll />
      </div>
      
      {/* HeroCards section with Tailwind styling for spacing and layout */}
     

      <Video />
      <FaqComponent />
    </main>
  );
}
