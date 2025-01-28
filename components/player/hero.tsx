import React from 'react';
import Image from 'next/image';
import BasketballImg from '@/public/basketball.jpg';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/fadeIn';


export default function Hero() {
    return (
        <div className="flex flex-col gap-16 pb-8">
            {/* Hero Desktop Section */}
            <FadeIn>
                <section className="min-h-[calc(100vh-4rem)] hidden lg:flex items-center">
                    <div className="container flex flex-col lg:flex-row lg:justify-between items-center gap-6 py-8 ">
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left  ">
                            <h1 className="font-heading text-4xl sm:text-4xl md:text-5xl xl:text-xl 2xl:text-7xl">
                                Precision on the Court, Perfection in the Code.
                            </h1>
                            <p className="mt-4 text-muted-foreground sm:text-lg xl:text-xl ">
                                Full stack developer and a professional basketball player.<br />
                                Jump Shots & JavaScript
                            </p>
                            <div className="mt-8 space-x-4">
                                <Button asChild size="lg" className="text-lg">
                                    <Link href="#highlights">Watch Highlights</Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="text-lg">
                                    <Link href="#stats">View Stats</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="lg:w-1/3  h-1/4">
                            <Image
                                src={BasketballImg}
                                alt="Hero"
                                width={900}
                                height={600}
                                className="rounded-full object-cover"
                                priority
                            />
                        </div>
                    </div>
                </section>

                {/* Hero Mobile Section */}
                <section className="my-4 flex items-center lg:hidden">
                    <div className="container flex flex-col items-center gap-2 w-3/4 mx-auto">
                        <div className="w-full py-4">
                            <Image
                                src={BasketballImg}
                                alt="Hero"
                                width={900}
                                height={600}
                                className="rounded-full object-cover "
                                priority
                            />
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <h1 className="font-heading text-3xl sm:text-3xl md:text-4xl">
                                Precision on the Court, Perfection in the Code.
                            </h1>
                            <p className="mt-4 text-muted-foreground sm:text-lg">
                                Full stack developer and a professional basketball player.<br />
                                Jump Shots & JavaScript
                            </p>
                            <div className="flex flex-row mt-8 space-x-4">
                                <Button asChild size="sm" className="text-lg">
                                    <Link href="#highlights">Watch Highlights</Link>
                                </Button>
                                <Button asChild size="sm" variant="ghost" className="text-lg">
                                    <Link href="#stats">View Stats</Link>
                                </Button>
                            </div>
                        </div>

                    </div>
                </section>
            </FadeIn>
        </div>
    );
}


