"use client"

import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

interface TimelineContent {
  id?: string | number
  year: string | number
  [key: string]: any // Support any additional properties
}

interface TimelineProps {
  contents: TimelineContent[]
}

export function Timeline({ contents }: TimelineProps) {
  gsap.registerPlugin(ScrollTrigger)
  const pageRef = useRef<HTMLDivElement>(null)
  const sectionsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const sections = sectionsRef.current.filter(Boolean)

    sections.forEach((section, index) => {
      const yearElement = section.querySelector(".year")
      const contentElement = section.querySelector(".content")

      gsap.fromTo(
        yearElement,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: section,
            start: "top center+=200",
            end: "bottom center",
            scrub: true,
            onEnter: () => gsap.to(yearElement, { opacity: 1 }),
            onLeave: () => gsap.to(yearElement, { opacity: 0 }),
            onEnterBack: () => gsap.to(yearElement, { opacity: 1 }),
            onLeaveBack: () => gsap.to(yearElement, { opacity: 0 }),
          },
        },
      )

      gsap.fromTo(
        contentElement,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: section,
            start: "top center+=100",
            end: "bottom center",
            scrub: true,
            onEnter: () => gsap.to(contentElement, { opacity: 1 }),
            onLeave: () => gsap.to(contentElement, { opacity: 0 }),
            onEnterBack: () => gsap.to(contentElement, { opacity: 1 }),
            onLeaveBack: () => gsap.to(contentElement, { opacity: 0 }),
          },
        },
      )
    })

    const handleResize = () => ScrollTrigger.refresh()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div ref={pageRef} className="relative lg:pt-24 my-12 max-w-[2000px] mx-auto">
      <div className="ml-8 lg:ml-0 timeline-line absolute top-0 bottom-0 w-[2px] bg-primary/20 z-10 lg:left-1/2 transform -translate-x-1/2"></div>
      <div className="flex flex-col space-y-20">
        {contents.map((content: TimelineContent, index: number) => (
          <section
            ref={(el: HTMLDivElement) => (sectionsRef.current[index] = el)}
            key={content.id || index}
            className={`flex w-full min-h-[20vh] snap-center relative ${
              index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
            }`}
          >
            <div className="year ml-8 lg:ml-0 text-5xl lg:text-6xl py-2 absolute lg:left-1/2 top-[30%] transform -translate-x-1/2 -translate-y-1/2 z-20 bg-background">
              {content.year}
            </div>
            <div
              className={`ml-32 lg:ml-4 content ${
                index % 2 === 0 ? "lg:ml-12 lg:pl-12 text-left" : "lg:mr-12 lg:pr-12"
              } w-[80%] lg:w-[40%]`}
            >
              {Object.entries(content).map(([key, value]) =>
                key !== "year" && key !== "id" ? (
                  <p key={key} className="mb-4 leading-2">
                    <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                  </p>
                ) : null
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
