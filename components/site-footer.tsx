import { Layers } from "lucide-react"
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Layers className="h-6 w-6" />
          <p className="text-center text-sm leading-loose md:text-left">
            Built by{" "}
            <Link href="/" className="font-medium underline underline-offset-4">
              Erkam Kiris
            </Link>
            . The source code is available on{" "}
            <Link
              href="https://github.com/erkamkiris"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}

