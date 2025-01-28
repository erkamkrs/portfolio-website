import Link from "next/link"
import { BiBasketball } from "react-icons/bi"
import { BsGithub, BsLinkedin } from "react-icons/bs"


export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-row justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex lg:flex-row items-center gap-2 px-2 md:flex-row 2 md:px-0">
          <BiBasketball className="h-8 w-8" />
          <p className="font-bold text-lg">Erkam</p>
          <p className="font-bold text-lg">Kiris</p>
        </div>
        <div className="flex flex-row justify-end gap-4 w-full items-center">
          <Link href="https://github.com/erkamkrs" className="text-foreground/60 hover:text-foreground">
            <BsGithub className="h-6 w-6" />
          </Link>
          <Link href="https://www.linkedin.com/in/erkamkiris/" className="text-foreground/60 hover:text-foreground">
            <BsLinkedin className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

