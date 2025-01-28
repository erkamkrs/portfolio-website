import Image from "next/image"
import Link from "next/link"
import DeveloperImg from "@/public/developer.jpg"
import { Button } from "@/components/ui/button"
import Services from "@/components/developer/services"
import Technologies from "@/components/developer/technologies"
import Experience from "@/components/developer/experience"
import Contact from "@/components/contact"
import { FadeIn } from "@/components/ui/fadeIn"
import Hero from "@/components/developer/hero"

export default function DeveloperPage() {
  return (
    <>
      {/* Hero Section */}
      < Hero />

      {/* Experience Section */}
      < Experience />

      {/* Services Section */}

      < Services />

      {/* Technologies Section */}
      < Technologies />

      {/* Contact Section */}
      < Contact />
    </ >
  )
}
