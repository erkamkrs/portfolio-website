"use client"

import Image from "next/image"
import Link from "next/link"
import BasketballImg from "@/public/basketball.jpg"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Contact from "@/components/contact"
import Experience from "@/components/player/experience"
import Stats from "@/components/player/stats"

const HIGHLIGHTS = [
  {
    year: "2023",
    url: "https://youtu.be/Coc_dT-jcOw?si=HUgtTTeQJgoWDH_r",
  },
  {
    year: "2022",
    url: "https://youtu.be/88JQbERQpFE?si=8X3195ZrGk0XzZn9",
  },
  {
    year: "2021",
    url: "https://youtu.be/UtQiRfMQN88?si=AzMQPrDKJUgiZp6o",
  },
]

export default function BasketballPage() {
  return (
    <div className="flex flex-col gap-16 pb-8">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] hidden lg:flex items-center">
        <div className="container flex flex-col lg:flex-row lg:justify-between items-center gap-6 py-8 ">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left  ">
            <h1 className="font-heading text-4xl sm:text-4xl md:text-5xl xl:text-xl 2xl:text-7xl">
              Precision on the Court, Perfection in the Code.
            </h1>
            <p className="mt-4 text-muted-foreground sm:text-lg xl:text-xl ">
              Full stack developer and a professional basketball player.<br />
              Jump Shots & JavaScript
            </p>
            <div className="mt-8 space-x-4">
              <Button asChild size="lg" className="text-lg">
                <Link href="#highlights">Watch Highlights</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg">
                <Link href="#stats">View Stats</Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/3  h-1/4">
            <Image
              src={BasketballImg}
              alt="Hero"
              width={900}
              height={600}
              className="rounded-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Hero Mobile Section */}
      <section className="my-4 flex items-center lg:hidden">
        <div className="container flex flex-col items-center gap-2 w-3/4 mx-auto">
          <div className="w-full py-4">
            <Image
              src={BasketballImg}
              alt="Hero"
              width={900}
              height={600}
              className="rounded-full object-cover "
              priority
            />
          </div>
          <div className="flex flex-col items-center text-center">
            <h1 className="font-heading text-3xl sm:text-3xl md:text-4xl">
              Precision on the Court, Perfection in the Code.
            </h1>
            <p className="mt-4 text-muted-foreground sm:text-lg">
              Full stack developer and a professional basketball player.<br />
              Jump Shots & JavaScript
            </p>
            <div className="flex flex-row mt-8 space-x-4">
              <Button asChild size="sm" className="text-lg">
                <Link href="#highlights">Watch Highlights</Link>
              </Button>
              <Button asChild size="sm" variant="ghost" className="text-lg">
                <Link href="#stats">View Stats</Link>
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* Experience Timeline Section */}
      <Experience />

      {/* Stats Section */}
      <Stats />



      {/* Highlights Section */}
      <section id="highlights" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex flex-col items-center space-y-4 text-center mb-8">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Season Highlights</h2>
          <p className="max-w-[50%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Watch game highlights from recent seasons
          </p>
        </div>
        <div className="flex flex-row w-full gap-8 flex-wrap justify-center">
          {HIGHLIGHTS.map((highlight) => (
            <Card key={highlight.year} className="p-6 max-w-[320px] w-full">
              <h3 className="text-2xl font-semibold mb-4">{highlight.year} Season</h3>
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  src={highlight.url.replace("youtu.be/", "youtube.com/embed/")}
                  title={`${highlight.year} Season Highlights`}
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Contact />
    </div>
  )
}
