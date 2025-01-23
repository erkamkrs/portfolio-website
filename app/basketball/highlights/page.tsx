"use client"

import { Card } from "@/components/ui/card"

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

export default function HighlightsPage() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Season Highlights</h1>
      <div className="grid gap-8">
        {HIGHLIGHTS.map((highlight) => (
          <Card key={highlight.year} className="p-6">
            <h2 className="text-2xl font-semibold mb-4">{highlight.year} Season</h2>
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
    </div>
  )
}

