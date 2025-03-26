"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeIn } from "../ui/fadeIn";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { title } from "process";

const SERVICES = [
    {
        title: "Web Development",
        description: "Modern web applications built with Next.js, React, and other cutting-edge technologies",
        features: ["Full-stack Development", "Responsive Design", "Dynamic Rendering", "SEO Optimization"]
    },
    {
        title: "Mobile Development",
        description: "Cross-platform mobile applications for iOS and Android using React Native",
        features: ["iOS & Android Apps", "Offline Support", "UI/UX Implementation", "Performance Optimization"]
    },
    {
        title: "Back End Development",
        description: "APIs and services that power your applications using Node.js, and more",
        features: ["API Development", "Database Design", "Authentication", "REST & GraphQL"],
    },
    {
        title: "API Integrations",
        description: "Third-party integrations to connect your applications with popular services",
        features: ["Payment Gateways", "Social Media", "Analytics", "Email Marketing"],
    }
]

export default function Services() {
    const [activeIndex, setActiveIndex] = useState(1); // Start with middle card active
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    // Handle infinite looping
    const totalItems = SERVICES.length;
    
    const getVisibleIndices = () => {
        let indices = [
            (activeIndex - 1 + totalItems) % totalItems,
            activeIndex,
            (activeIndex + 1) % totalItems
        ];
        return indices;
    };

    const visibleIndices = getVisibleIndices();

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % totalItems);
    };

    // Touch and mouse event handlers for swipe
    const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
        setIsDragging(true);
        const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
        setStartX(clientX);
        setTranslateX(0);
    };

    const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
        if (!isDragging) return;
        const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
        const moveX = clientX - startX;
        setTranslateX(moveX);
    };

    const handleTouchEnd = () => {
        if (!isDragging) return;
        setIsDragging(false);
        
        // Determine if swipe was significant enough to change card
        if (translateX > 50) {
            handlePrev();
        } else if (translateX < -50) {
            handleNext();
        }
    };

    // Auto-rotate if desired (optional)
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div id="services">
            <section className="container space-y-6 py-8 md:py-12 lg:py-24">
                <FadeIn>
                    <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Services</h2>
                        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                            Comprehensive software development services
                        </p>
                    </div>
                    
                    <div 
                        className="relative mx-auto max-w-[2000px] overflow-hidden"
                        ref={carouselRef}
                    >
                        <div 
                            className="flex items-center justify-center gap-6 px-4 py-8"
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                            onMouseDown={handleTouchStart}
                            onMouseMove={handleTouchMove}
                            onMouseUp={handleTouchEnd}
                            onMouseLeave={handleTouchEnd}
                            style={{
                                transform: `translateX(${translateX}px)`,
                                transition: isDragging ? 'none' : 'transform 0.5s ease',
                            }}
                        >
                            {visibleIndices.map((index, i) => {
                                const service = SERVICES[index];
                                const isCenter = i === 1;
                                
                                return (
                                    <div 
                                        key={`${service.title}-${index}`}
                                        className={cn(
                                            "transition-transform duration-500 ",
                                            isCenter ? "w-full max-w-[600px] z-10 scale-110" : "w-full max-w-[400px] opacity-60 "
                                        )}
                                    >
                                        <Card className="flex flex-col h-full">
                                            <CardHeader>
                                                <CardTitle className={isCenter ? "text-2xl" : "text-xl"}>{service.title}</CardTitle>
                                                <CardDescription>{service.description}</CardDescription>
                                            </CardHeader>
                                            <CardContent className="flex-1">
                                                <ul className="list-disc pl-4 space-y-2">
                                                    {service.features.map((feature) => (
                                                        <li key={feature}>{feature}</li>
                                                    ))}
                                                </ul>
                                            </CardContent>
                                        </Card>
                                    </div>
                                );
                            })}
                        </div>
                        
                        {/* Navigation arrows */}
                        <button 
                            onClick={handlePrev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 p-2 rounded-full shadow hover:bg-background"
                            aria-label="Previous service"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m15 18-6-6 6-6"/>
                            </svg>
                        </button>
                        <button 
                            onClick={handleNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 p-2 rounded-full shadow hover:bg-background"
                            aria-label="Next service"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m9 18 6-6-6-6"/>
                            </svg>
                        </button>
                    </div>
                </FadeIn>
            </section>
        </div>
    );
}