import { Timeline } from "@/components/timeline"
import { FadeIn } from "../ui/fadeIn"

const TIMELINE_CONTENT = [
  {
    year: 2020,
    Degree: "Bachelors of Science",
    School: "Davis & Elkins College",
  },
  {
    year: 2021,
    Company: "Perfist",
    Title: "Junior Software Developer",
  },
  {
    year: 2023,
    Company: "Trendico Group",
    Title: "Fullstack Developer",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="container py-8 md:py-12 lg:py-24">
      <FadeIn>
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-8">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Experience & Education</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Professional experience and education background
          </p>
        </div>
        <Timeline contents={TIMELINE_CONTENT} />
      </FadeIn>
    </section >
  )
}
