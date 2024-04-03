"use client"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="flex h-20 w-full items-center pt-16 px-4 md:px-6">
      {/* <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid gap-2 py-6 text-black">
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
              Home
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
              About
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
              Services
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet> */}
      <div className="w-full flex justify-center">
        <Link className="mx-auto" href="#">
          <Image
            alt="Logo"
            className="h-auto w-auto"
            
            src="/Logo.png"
            height={'300'}
            width={'150'}
          />
        </Link>
      </div>
    </header>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FFA500"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
