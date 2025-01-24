import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { features } from "process";

const SERVICES = [
    {
        title: "Web Development",
        description: "Modern web applications built with Next.js, React, and other cutting-edge technologies",
        features: ["Full-stack Development", "Responsive Design", "Performance Optimization", "SEO"],
    },
    {
        title: "Mobile Development",
        description: "Cross-platform mobile applications for iOS and Android using React Native",
        features: ["iOS & Android Apps", "Native Performance", "Offline Support", "Push Notifications"],
    },
    {
        title: "Back End Development",
        description: "APIs and services that power your applications using Node.js, and more",
        features: ["API Development", "Database Design", "Authentication", "REST & GraphQL"],
    },
]

export default function Services() {
    return (
        <div id="services">
            <section className="container space-y-6 py-8 md:py-12 lg:py-24">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Services</h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        Comprehensive software development services
                    </p>
                </div>
                <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 max-w-[2000px]">
                    {SERVICES.map((service) => (
                        <Card key={service.title} className="flex flex-col">
                            <CardHeader>
                                <CardTitle>{service.title}</CardTitle>
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
                    ))}
                </div>
            </section >
        </div>
    );
}