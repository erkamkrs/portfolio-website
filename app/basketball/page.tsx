"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Mail, Trophy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Timeline } from "@/components/timeline"

const STATS = {
  "2023-24": {
    points: 22.5,
    rebounds: 6.8,
    assists: 4.2,
    steals: 1.8,
    blocks: 0.9,
    games: 32,
  },
  "2022-23": {
    points: 20.1,
    rebounds: 5.9,
    assists: 3.8,
    steals: 1.5,
    blocks: 0.7,
    games: 35,
  },
  "2021-22": {
    points: 18.4,
    rebounds: 5.2,
    assists: 3.5,
    steals: 1.3,
    blocks: 0.6,
    games: 30,
  },
}

const TIMELINE_CONTENT = [
  {
    year: 2024,
    title: "League All-Star",
    body: "Selected for the All-Star team and led team to playoffs",
  },
  {
    year: 2023,
    title: "Team Captain",
    body: "Named team captain and achieved career-high scoring average",
  },
  {
    year: 2022,
    title: "Rising Star",
    body: "Named to the All-Rookie team and won Rookie of the Month twice",
  },
]

const HIGHLIGHTS = [
  {
    year: "2023-24",
    url: "https://youtu.be/88JQbERQpFE?si=8X3195ZrGk0XzZn9",
  },
  {
    year: "2022-23",
    url: "https://youtu.be/Coc_dT-jcOw?si=HUgtTTeQJgoWDH_r",
  },
  {
    year: "2021-22",
    url: "https://youtu.be/UtQiRfMQN88?si=AzMQPrDKJUgiZp6o",
  },
]

export default function BasketballPage() {
  return (
    <div className="flex flex-col gap-16 pb-8">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center">
        <div className="container flex flex-col lg:flex-row items-center gap-12 py-16">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2 xl:w-2/5">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl">Erkam Kiris</h1>
            <p className="mt-4 text-muted-foreground sm:text-xl xl:text-2xl max-w-[42rem] xl:max-w-[50rem]">
              Professional Basketball Player
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
          <div className="lg:w-1/2 xl:w-3/5">
            <Image
              src="/placeholder.svg"
              alt="Basketball Hero"
              width={900}
              height={600}
              className="rounded-lg object-cover w-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-8">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Career Statistics</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Season averages and achievements
          </p>
        </div>
        <Card className="max-w-[2000px] mx-auto">
          <CardHeader>
            <CardTitle>Season Averages</CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Season</TableHead>
                  <TableHead>Games</TableHead>
                  <TableHead>Points</TableHead>
                  <TableHead>Rebounds</TableHead>
                  <TableHead>Assists</TableHead>
                  <TableHead>Steals</TableHead>
                  <TableHead>Blocks</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Object.entries(STATS).map(([season, stats]) => (
                  <TableRow key={season}>
                    <TableCell className="font-medium">{season}</TableCell>
                    <TableCell>{stats.games}</TableCell>
                    <TableCell>{stats.points}</TableCell>
                    <TableCell>{stats.rebounds}</TableCell>
                    <TableCell>{stats.assists}</TableCell>
                    <TableCell>{stats.steals}</TableCell>
                    <TableCell>{stats.blocks}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      {/* Experience Timeline Section */}
      <section id="experience" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-8">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Career Highlights</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Professional achievements and milestones
          </p>
        </div>
        <Timeline contents={TIMELINE_CONTENT} />
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-8">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Season Highlights</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Watch game highlights from recent seasons
          </p>
        </div>
        <div className="grid gap-8 max-w-[2000px] mx-auto">
          {HIGHLIGHTS.map((highlight) => (
            <Card key={highlight.year} className="p-6">
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

      {/* Contact Section */}
      <section id="contact" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-8">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Contact Me</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Get in touch for business inquiries
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>sports@example.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Trophy className="h-4 w-4" />
                <span>Professional Basketball Player</span>
              </div>
            </CardContent>
          </Card>
          <Image
            src="/placeholder.svg"
            alt="Basketball Contact"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      </section>
    </div>
  )
}

