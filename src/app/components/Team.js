import Image from "next/image"
export default function Team() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-4 px-4 text-center md:px-6 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet the Team</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our team is composed of dedicated professionals who are passionate about their work.
            </p>
          </div>
          <div className="space-y-4">
            <Image
              alt="Alejandro"
              className="mx-auto rounded-full object-cover object-center"
              height="200"
              src="/ale.png"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <h3 className="text-lg font-bold">Ale</h3>
            <p className="text-sm text-gray-500">Creative Director</p>
            <p className="text-sm"></p>
          </div>
          <div className="space-y-4">
            <Image
              alt="Team Member 2"
              className="mx-auto rounded-full object-cover object-center"
              height="200"
              src="/joseph.png"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <h3 className="text-lg font-bold">Joseph</h3>
            <p className="text-sm text-gray-500">Head of Comms</p>
            <p className="text-sm"></p>
          </div>
          <div className="space-y-4">
            <Image
              alt="Team Member 3"
              className="mx-auto rounded-full object-cover object-center"
              height="200"
              src="/dyana.png"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <h3 className="text-lg font-bold">Dyana</h3>
            <p className="text-sm text-gray-500">Product Engineer</p>
            <p className="text-sm"></p>
          </div>
          <div className="space-y-4">
            <Image
              alt="Team Member 4"
              className="mx-auto rounded-full object-cover object-center"
              height="200"
              src="/blue.png"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <h3 className="text-lg font-bold">Blue</h3>
            <p className="text-sm text-gray-500">Artist</p>
            <p className="text-sm"></p>
          </div>
          <div className="space-y-4">
            <Image
              alt="Team Member 5"
              className="mx-auto rounded-full object-cover object-center"
              height="200"
              src="/metaseed.png"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <h3 className="text-lg font-bold">Metaseed</h3>
            <p className="text-sm text-gray-500">Development</p>
            <p className="text-sm"></p>
          </div>
        </div>
      </section>
    )
  }
  
  