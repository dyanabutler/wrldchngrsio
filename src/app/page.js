import Image from "next/image";
import Navbar from "./components/Navbar";
import EmailForm from "./components/EmailForm";
import Hero from "./components/Hero";
import Video from "./components/Video";
import Scroll from "./components/Scroll";
import FaqComponent from "./components/Faq";
import Background from "./components/Background";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
 
 
  <div className="background-image" style={{ backgroundImage: `url(/bg-1.svg)`, backgroundSize: "100% 100%", backgroundPosition: "top center" }}>
    <Navbar />
    <Hero />
    <EmailForm />
    <Scroll />
    </div>
    <Video />
  
  <FaqComponent />

      
      

      </main>
  );
}
