"use client"
import React, { useState } from 'react';


import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible"

export default function Component() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      <div className="grid gap-6">
        <Collapsible>
          <CollapsibleTrigger asChild>
            <div className="flex items-center justify-between px-4 py-2 rounded-lg cursor-pointer bg-black dark:bg-gray-800 hover:bg-orange-600 dark:hover:bg-gray-700 transition-colors">
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">What is WRLD CHNGRS?</h2>
              <ChevronDownIcon className="h-5 w-5" />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800">
            <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400">
            WRLD CHNGR is a unique, AI-driven NFT universe where players control heroes of various classes and body types, each uniquely generated. Our innovative AI technology ensures each hero is one-of-a-kind, with the user s journey directly influencing their heros development and the impacts they make in the game and, symbolically, in the real world.
            </p>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible>
          <CollapsibleTrigger asChild>
            <div className="flex items-center justify-between px-4 py-2 rounded-lg cursor-pointer bg-back dark:bg-gray-800 hover:bg-orange-600 dark:hover:bg-gray-700 transition-colors">
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">What do impacts mean?</h2>
              <ChevronDownIcon className="h-5 w-5" />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800">
            <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400">
            Impacts in WRLD CHNGRS refer to the positive actions and achievements you accomplish using your connections here with WRLD CHNGRS. These could align with real-world issues like environmental conservation or social justice. Each Impact not only progresses your impact level but also mirrors positive changes in the real world, emphasizing our commitment to making a difference.
            </p>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible>
          <CollapsibleTrigger asChild>
            <div className="flex items-center justify-between px-4 py-2 rounded-lg cursor-pointer bg-black dark:bg-gray-800 hover:bg-orange-600 dark:hover:bg-gray-700 transition-colors">
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">How are you different from other NFTS?</h2>
              <ChevronDownIcon className="h-5 w-5" />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800">
            <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400">
            WRLD CHNGRS offers a unique NFT experience through building your character as if it were a video game. From changing your poses, bodytypes, skin tone, and accessories.


            </p>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}
