import React from 'react';
import { Card } from '@/components/ui/card';
import { FadeIn } from '@/components/ui/fadeIn';

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
export default function Highlights() {
    return (
        <section id="highlights" className="container py-8 md:py-12 lg:py-24">
            <FadeIn>
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
            </FadeIn>
        </section>
    )
}