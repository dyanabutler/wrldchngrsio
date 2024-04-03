import { Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const proFont = localFont({ src: './fonts/ObelixPro-cyr.ttf', variable: '--font-pro', })

export const metadata = {
  title: "Coming Soon - WRLD CHNGRS",
  description: "A Digital Collectible that makes an Impact in the NFT Community",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Ensure your Tailwind CSS is properly linked here */}
      </head>
      <body className={`font-pro min-h-screen bg-gradient-to-b from-black via-black to-black text-white ${inter.variable} ${proFont.variable}`}>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    {children}
  </div>
</body>
    </html>
  );
}
