import Image from "next/image";

import EmailForm from "./components/EmailForm";

import Video from "./components/Video";
import Scroll from "./components/Scroll";
import FaqComponent from "./components/Faq";

import "./globals.css";
import About from "./components/About"
import Team from "./components/Team";
import Poster from "./components/Poster";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Header from "./components/Header";
import CardsContainer from "./components/CardsContainer";
import StickyFadeOutImage from "./components/StickyImage";
import Background from "./components/Background";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <StickyFadeOutImage />
      
        <Header />
        
        <Hero />
        <Poster />
        <EmailForm />
        <Scroll />
        
        <Video />
        <CardsContainer />
        <Team />
        
        <FaqComponent />
      
    </main>
  );
}
