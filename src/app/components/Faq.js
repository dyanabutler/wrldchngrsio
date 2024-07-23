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
            WRLD CHNGR is a unique, NFT universe where users build their heroes of various classes and body types, each uniquely generated. Users can attach lore to each hero using our journal entry feature ensuring each NFT is one-of-a-kind.
            </p>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible>
          <CollapsibleTrigger asChild>
            <div className="flex items-center justify-between px-4 py-2 rounded-lg cursor-pointer bg-back dark:bg-gray-800 hover:bg-orange-600 dark:hover:bg-gray-700 transition-colors">
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">How does the journal entry feature work? </h2>
              <ChevronDownIcon className="h-5 w-5" />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800">
            <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400">
            Once you own a hero, you&apos;ll have the ability to create journal entries linked to your NFT. This allows you to add your own lore, write poems, share advice, and more—the possibilities are endless! 
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
            
ChatGPT
WRLD CHNGRS provides a unique NFT experience with our hero builder, allowing you to customize your character’s poses, body types, skin tones, and accessories. Once all 4,444 heroes are sold, our secret AI feature will be unveiled.


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
