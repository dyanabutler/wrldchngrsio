
"use client"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function AboutComponent() {
  return (
    <section className="relative w-full min-h-screen bg-[#f9f9f9] flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <h1 className="text-[10rem] md:text-[12rem] font-bold text-gray-500">ABOUT US</h1>
      </div>
      <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-wrap justify-center">
        <Tabs className="w-full max-w-4xl mx-auto" defaultValue="member1" orientation="horizontal">
          <TabsList className="flex flex-wrap justify-center gap-4 p-4 bg-transparent">
            <TabsTrigger className="flex flex-col items-center" value="member1">
              <Avatar>
                <AvatarImage alt="Member 1" src="/placeholder-avatar.jpg" />
                <AvatarFallback>M1</AvatarFallback>
              </Avatar>
            </TabsTrigger>
            <TabsTrigger className="flex flex-col items-center" value="member2">
              <Avatar>
                <AvatarImage alt="Member 2" src="/placeholder-avatar.jpg" />
                <AvatarFallback>M2</AvatarFallback>
              </Avatar>
            </TabsTrigger>
            <TabsTrigger className="flex flex-col items-center" value="member3">
              <Avatar>
                <AvatarImage alt="Member 3" src="/placeholder-avatar.jpg" />
                <AvatarFallback>M3</AvatarFallback>
              </Avatar>
            </TabsTrigger>
            <TabsTrigger className="flex flex-col items-center" value="member4">
              <Avatar>
                <AvatarImage alt="Member 4" src="/placeholder-avatar.jpg" />
                <AvatarFallback>M4</AvatarFallback>
              </Avatar>
            </TabsTrigger>
          </TabsList>
          <TabsContent className="p-4" value="member1">
            <h2 className="text-2xl font-bold">Member 1</h2>
            <p className="mt-2 text-gray-500">Detailed information about Member 1.</p>
          </TabsContent>
          <TabsContent className="p-4" value="member2">
            <h2 className="text-2xl font-bold">Member 2</h2>
            <p className="mt-2 text-gray-500">Detailed information about Member 2.</p>
          </TabsContent>
          <TabsContent className="p-4" value="member3">
            <h2 className="text-2xl font-bold">Member 3</h2>
            <p className="mt-2 text-gray-500">Detailed information about Member 3.</p>
          </TabsContent>
          <TabsContent className="p-4" value="member4">
            <h2 className="text-2xl font-bold">Member 4</h2>
            <p className="mt-2 text-gray-500">
              Detailed information about Member 4.Detailed information about Member 4.Detailed information about Member
              4.Detailed information about Member 4.Detailed information about Member 4.Detailed information about
              Member 4.Detailed information about Member 4.Detailed information about Member 4.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

