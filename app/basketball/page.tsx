"use client"
import Contact from "@/components/contact"
import Experience from "@/components/player/experience"
import Stats from "@/components/player/stats"
import Hero from "@/components/player/hero"
import Highlights from "@/components/player/highlights"



export default function BasketballPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Experience Timeline Section */}
      <Experience />

      {/* Stats Section */}
      <Stats />

      {/* Highlights Section */}
      <Highlights />

      {/* Contact Section */}
      <Contact />

    </>
  )
}
