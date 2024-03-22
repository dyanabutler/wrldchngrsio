import Image from "next/image";
import Navbar from "./components/Navbar";
import EmailForm from "./components/Emailform";
import Hero from "./components/Hero";
import Video from "./components/Video";
import Scroll from "./components/Scroll";
import FaqComponent from "./components/Faq";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
    <Image
    src="/bg.png" // 
    objectFit="cover"
    quality={100}
     index="z-10"
    layout="fill"
    alt="bg"
  />
     <div className="z-50"><Navbar /></div>
     <div className="z-50"><Hero /></div>
    
     
     <div className="z-50"><EmailForm /></div>
     <div className="z-50"><Scroll /></div>
     <Image
    src="/bg-1.svg" // 
    objectFit="cover"
    quality={100}
    index="z-1"
    layout="fill"
    alt="bg"
  />
        <Video />
        <div className="z-50"><FaqComponent /></div>
      
      
     

    </main>
  );
}
