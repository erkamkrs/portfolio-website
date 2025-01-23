"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import { Navigation, Pagination } from 'swiper/modules';

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
];

export default function Technologies() {
    return (
        <div id="services">
            <section className="container space-y-6 py-8 md:py-12 lg:py-24">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Technologies</h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        Technologies I work with
                    </p>
                </div>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 1 },
                        1024: { slidesPerView: 1 },
                    }}
                    modules={[Pagination, Navigation]}
                    className="mx-auto max-w-2xl"
                >
                    {TECHNOLOGIES.map((technology) => (
                        <SwiperSlide key={technology.title}>
                            <Card className="flex flex-col items-center text-center max-w-xs mx-auto ">
                                <CardHeader>
                                    <CardTitle className="text-lg">{technology.title}</CardTitle>
                                    <CardDescription >{technology.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1 pb-12">
                                    <ul className="list-asc space-y-2">
                                        {technology.features.map((feature) => (
                                            <Button
                                                variant={"outline"}
                                                className="mx-1 text-xs p-1"
                                                key={feature}
                                            >
                                                {feature}
                                            </Button>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </div>
    );
}
