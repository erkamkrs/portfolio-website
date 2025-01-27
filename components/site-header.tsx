"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { BiBasketball } from "react-icons/bi"

export function SiteHeader() {
  const pathname = usePathname()
  const router = useRouter()
  const isBasketball = pathname.startsWith("/basketball")

  const navItems = isBasketball
    ? [
      { href: "/basketball", label: "Home" },
      { href: "/basketball#stats", label: "Stats" },
      { href: "/basketball#experience", label: "Experience" },
      { href: "/basketball#highlights", label: "Highlights" },
      { href: "/basketball#contact", label: "Contact Me" },
    ]
    : [
      { href: "/", label: "Home" },
      { href: "/#services", label: "Services" },
      { href: "/#experience", label: "Experience" },
      { href: "/#technologies", label: "Technologies" },
      { href: "/#contact", label: "Contact Me" },
    ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className=" flex items-center space-x-4">
          <Button size={"sm"} className="p-1">
            <Link href={isBasketball ? "/basketball" : "/"} className="mr-6 flex items-center space-x-2">
              <BiBasketball className="h-6 w-6" />
              <span className="font-bold text-sm lg:text-lg">Erkam Kiris</span>
            </Link>
          </Button>
          <nav className="flex hidden md:flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === item.href ? "text-foreground" : "text-foreground/60",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="flex flex-row justify-between gap-4 w-full items-center">
            <Button onClick={() => router.push(isBasketball ? "/" : "/basketball")} className="ml-auto">
              {isBasketball ? "Developer" : "Basketball"}
            </Button>
            <Link href="https://github.com/erkamkrs" className="text-foreground/60 hover:text-foreground">
              <BsGithub className="h-6 w-6" />
            </Link>
            <Link href="https://www.linkedin.com/in/erkamkiris/" className="text-foreground/60 hover:text-foreground">
              <BsLinkedin className="h-6 w-6" />
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

