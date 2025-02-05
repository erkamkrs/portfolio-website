import React from 'react';
import Image from 'next/image';
import DeveloperImg from '@/public/developer.jpg';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/fadeIn';


export default function Hero() {
    return (
        <div className="flex flex-col gap-16 pb-8">
            {/* Hero Desktop Section */}
            <section className="min-h-[calc(100vh-4rem)] flex items-center hidden lg:flex">
                <FadeIn>
                    <div className="container flex flex-col lg:flex-row items-center gap-6 py-8">
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2 ">
                            <h1 className="font-heading text-3xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl">
                                Precision on the Court, Perfection in the Code.
                            </h1>
                            <p className="mt-4 text-muted-foreground sm:text-lg xl:text-xl ">
                                Full stack developer and a professional basketball player.<br />
                                Jump Shots & JavaScript
                            </p>
                            <div className="mt-8 space-x-4">
                                <Button asChild size="lg" className="text-lg">
                                    <Link href="#contact">Contact Me</Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="text-lg">
                                    <Link href="#services">View Services</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <Image
                                src={DeveloperImg}
                                alt="Hero"
                                width={900}
                                height={600}
                                className="rounded-full object-cover w-full"
                                priority
                            />
                        </div>
                    </div>
                </FadeIn>
            </section>

            {/* Hero Mobile Section */}
            <section className="my-4 flex items-center lg:hidden">
                <FadeIn>
                    <div className="container flex flex-col items-center gap-2 ">
                        <div className="w-full py-4">
                            <Image
                                src={DeveloperImg}
                                alt="Hero"
                                width={900}
                                height={600}
                                className="rounded-full object-cover w-full"
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
                                    <Link href="#contact">Contact Me</Link>
                                </Button>
                                <Button asChild size="sm" variant="ghost" className="text-lg">
                                    <Link href="#stats">View Stats</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </section>
        </div>
    );
}