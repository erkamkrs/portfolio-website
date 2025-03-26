"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import { Navigation, Pagination } from 'swiper/modules';
import { FadeIn } from "../ui/fadeIn";
import { cn } from "@/lib/utils";

const TECHNOLOGIES = [
    {
        title: "Web Development",
        description: "Modern web applications, maintainable and scalable",
        features: ["React", "Next.js", "Tailwind CSS", "Astro", "Django", "Flask", "GSAP"],
    },
    {
        title: "Mobile Development",
        description: "Cross-platform mobile applications for iOS and Android",
        features: ["React Native", "Expo", "Swift"],
    },
    {
        title: "Back End Development",
        description: "APIs and services that power your applications",
        features: ["Node.js", "Postgres", "SQLite", "REST", "GraphQL", "Odoo"],
    },
    {
        title: "API Integrations",
        description: "Connect your applications with popular services",
        features: ["Stripe", "PayPal", "Google APIs", "Twitter API"],
    }
];

export default function Technologies() {
    return (
        <div id="technologies">
            <section className="container space-y-6 py-8 md:py-12 lg:py-24">
                <FadeIn>
                    <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Technologies</h2>
                        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                            Technologies I work with
                        </p>
                    </div>
                    <div className="relative">
                        <Swiper 
                            style={{
                                "--swiper-navigation-color": "#fff",
                                "--swiper-navigation-size": "24px",
                                "--swiper-pagination-bullet-inactive-color": "#999999",
                            } as React.CSSProperties}
                            spaceBetween={30}
                            slidesPerView={1.2}
                            centeredSlides={true}
                            loop={true}
                            navigation={{
                                nextEl: '.swiper-button-next-tech',
                                prevEl: '.swiper-button-prev-tech',
                            }}
                            breakpoints={{
                                640: { 
                                    slidesPerView: 1.5,
                                    spaceBetween: 20
                                },
                                768: { 
                                    slidesPerView: 2,
                                    spaceBetween: 30
                                },
                                1024: { 
                                    slidesPerView: 2.5,
                                    spaceBetween: 40
                                },
                                1280: {
                                    slidesPerView: 3,
                                    spaceBetween: 50
                                }
                            }}
                            modules={[Pagination, Navigation]}
                            className="mx-auto max-w-[2000px] py-4 px-4"
                        >
                            {TECHNOLOGIES.map((technology, index) => (
                                <SwiperSlide key={technology.title}>
                                    {({ isActive }) => (
                                        <div className={cn(
                                            "h-full transition-all duration-300",
                                            isActive ? "" : "scale-90 opacity-80"
                                        )}>
                                            <Card className="flex flex-col h-full">
                                                <CardHeader>
                                                    <CardTitle className={cn(
                                                        "text-lg md:text-xl",
                                                        isActive ? "text-2xl" : "text-lg"
                                                    )}>
                                                        {technology.title}
                                                    </CardTitle>
                                                    <CardDescription>{technology.description}</CardDescription>
                                                </CardHeader>
                                                <CardContent className="flex-1 pb-6">
                                                    <div className="flex flex-wrap gap-2 justify-center">
                                                        {technology.features.map((feature) => (
                                                            <Button
                                                                variant={"outline"}
                                                                className={cn(
                                                                    "text-xs p-1 md:text-sm",
                                                                    isActive ? "bg-accent/50" : ""
                                                                )}
                                                                key={feature}
                                                            >
                                                                {feature}
                                                            </Button>
                                                        ))}
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    )}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        
                        {/* Custom navigation buttons */}
                        <button className="swiper-button-prev-tech absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-background/80 p-3 rounded-full shadow hover:bg-background">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m15 18-6-6 6-6"/>
                            </svg>
                        </button>
                        <button className="swiper-button-next-tech absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-background/80 p-3 rounded-full shadow hover:bg-background">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m9 18 6-6-6-6"/>
                            </svg>
                        </button>
                    </div>
                </FadeIn>
            </section>
        </div>
    );
}