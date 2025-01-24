import { Timeline } from "@/components/timeline"

const TIMELINE_CONTENT = [
  {
    year: 2020,
    team: "Davis & Elkins College",
    league: "NCAA",
    stats: "15.4 PPG, 6.8 RPG, 1.6 ASG, 1.2 BPG, 0.9 SPG",
  },
  {
    year: "2021-22",
    team: "CB Tormes",
    league: "EBA",
    stats: "8.5 PPG, 4.7 RPG, Promotion to LEB Silver.",
  },
  {
    year: "2022-23",
    team: "CB SANTA CRUZ",
    league: "EBA",
    stats: "14.5 PPG, 8.6 RPG, 1.6 ASG",
  },
  {
    year: "2024-25",
    team: "CD Baloncesto Zuera",
    stats: "14.8 PPG, 7.7 RPG, 35% 3PT",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-8">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Experience</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Professional experience
        </p>
      </div>
      <Timeline contents={TIMELINE_CONTENT} />
    </section>
  )
}
