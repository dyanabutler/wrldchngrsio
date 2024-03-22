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
      <body className={`${inter.variable} ${proFont.variable} font-pro`}>
        {/* Apply Tailwind classes along with your Google font class to this div */}
        <div
  style={{
    minHeight: "100vh",
    background: "linear-gradient(to bottom, black 10%, black 90%)",
    color: "white",
  }}
  className={`${inter.className}`}
>
  {children}
</div>
      </body>
    </html>
  );
}
