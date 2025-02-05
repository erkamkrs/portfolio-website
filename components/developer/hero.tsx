"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import DeveloperImg from '@/public/developer.jpg';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/fadeIn';
import { gsap } from 'gsap';

export default function Hero() {
    useEffect(() => {
        const tl = gsap.timeline({
            defaults: {
                duration: 2,
                yoyo: true,
                ease: 'power2.inOut'
            }
        });

        tl.fromTo('.left, .right', {
            skewY: (i) => [-30, 15][i],
            scaleX: (i) => [0.6, 0.85][i],
            x: 200
        }, {
            skewY: (i) => [-15, 30][i],
            scaleX: (i) => [0.85, 0.6][i],
            x: -200
        }).play(0.5);

        const tl2 = gsap.timeline();

        document.querySelectorAll('text').forEach((t, i) => {
            tl2.add(
                gsap.fromTo(t, {
                    xPercent: -100,
                    x: 700
                }, {
                    duration: 1,
                    xPercent: 0,
                    x: 575,
                    ease: 'sine.inOut'
                }), i % 3 * 0.2
            );
        });

        window.onpointermove = (e) => {
            tl.pause();
            tl2.pause();
            gsap.to([tl, tl2], {
                duration: 2,
                ease: 'power4',
                progress: e.x / window.innerWidth
            });
        };
    }, []);

    return (
        <div className="flex flex-col gap-16 pb-8">
            <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
                <FadeIn>
                    <div className="relative w-full flex flex-col lg:flex-row items-center gap-6 py-8">
                        <div className="w-full flex justify-center">
                            <Image
                                src={DeveloperImg}
                                alt="Hero"
                                width={900}
                                height={600}
                                className="rounded-full object-cover w-full max-w-lg"
                                priority
                            />
                        </div>
                        <div className="lg:w-1/2 flex justify-center">
                            <div className="flex flex-col gap-4">
                                <svg viewBox="0 0 1280 720" className="w-full max-w-lg">
                                    <mask id="maskLeft">
                                        <rect x="-40%" width="100%" height="100%" fill="#fff" />
                                    </mask>
                                    <mask id="maskRight">
                                        <rect x="30%" width="100%" height="100%" fill="#fff" />
                                    </mask>
                                    <g fontSize="120" className="text-white font-bold">
                                        <g mask="url(#maskLeft)" fill="#fff" className="left">
                                            <text x="0" y="220" textAnchor="middle">Software </text>
                                            <text x="0" y="320" textAnchor="middle">Developer</text>
                                        </g>
                                        <g mask="url(#maskRight)" fill="#aaa" className="right">
                                            <text x="180" y="220" textAnchor="middle">Erkam</text>
                                            <text x="180" y="320" textAnchor="middle">Kiris</text>
                                        </g>
                                    </g>

                                </svg>
                                <div className="flex gap-4">
                                    <div className="mt-8 flex flex-col justify-center space-y-4">
                                        
                                        <p className="text-muted-foreground sm:text-lg xl:text-xl">
                                            Full stack developer and a professional basketball player.<br />
                                            Jump Shots & JavaScript
                                        </p>
                                        <div className="flex flex-row gap-4">
                                        <Button asChild size="lg" className="text-lg">
                                            <Link href="#contact">Contact Me</Link>
                                        </Button>
                                        <Button asChild size="lg" variant="outline" className="text-lg">
                                            <Link href="#services">View Services</Link>
                                        </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </FadeIn>
            </section>
        </div>
    );
}
