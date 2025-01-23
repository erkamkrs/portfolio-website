import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import ErkamImg from "@/public/developer2.jpg"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Contact() {
    return (
        <section id="contact" className="container py-8 md:py-12 lg:py-24">
            <div className="mx-auto flex  flex-col items-center space-y-4 text-center mb-8">
                <div className="flex flex-col items-center space-y-4 text-center mb-8">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Contact Me</h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 ">
                        Get in touch to discuss your project
                    </p>
                </div>
                <div className="flex flex-row  justify-between gap-x-24 ">
                    <Image
                        alt="Erkam Kiris"
                        src={ErkamImg}
                        className="rounded-full object-contain max-w-xl " />
                    <div className="space-y-4 mt-4 flex flex-col gap-2 ">
                        <Card>
                            <CardHeader>
                                <CardTitle>Contact Information</CardTitle>
                                <CardDescription>Reach out through any of these channels</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="flex items-center space-x-2">
                                    <Mail className="h-4 w-4" />
                                    <span>erkamkiris@gmail.com</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Phone className="h-4 w-4" />
                                    <span>+34 641 963 864</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <MapPin className="h-4 w-4" />
                                    <span>Zaragoza, Spain</span>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Send a Message</CardTitle>
                                <CardDescription>Fill out the form below</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-2">
                                    <div className="flex flex-col space-y-2">
                                        <label htmlFor="name" className="text-left">Name</label>
                                        <Input id="name" placeholder="Your name" />
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <label htmlFor="email" className="text-left">Email</label>
                                        <Input id="email" type="email" placeholder="Your email" />
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <label htmlFor="message" className="text-left">Message</label>
                                        <Textarea id="message" placeholder="Your message" />
                                    </div>
                                    <Button type="submit" className="w-full">
                                        Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}