"use client";

import React, { useId } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import ErkamImg from "@/public/developer2.jpg";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "./ui/input";
import { sendEmail } from "@/lib/contactEmail";
import { useForm } from 'react-hook-form';

// Forwarded TextInput Component
const TextInput = React.forwardRef<HTMLInputElement, React.ComponentPropsWithoutRef<'input'> & { label: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }>(({
    label,
    onChange,
    ...props
}, ref) => {
    const id = useId();
    return (
        <div className="group relative z-0 transition-all focus-within:z-10">
            <Input
                type="text"
                id={id}
                ref={ref}
                onChange={onChange}
                placeholder={label}
                {...props}
            />
        </div>
    );
});
TextInput.displayName = "TextInput";


export type FormData = {
    name: string;
    email: string;
    message: string;
};



export default function Contact() {
    const { register, handleSubmit } = useForm<FormData>();


    function onSubmit(data: FormData) {
        sendEmail(data);
    }


    return (
        <section id="contact" className="container py-8 md:py-12 lg:py-24">
            <div className="mx-auto flex flex-col items-center space-y-4 text-center mb-8">
                <div className="flex flex-col items-center space-y-4 text-center mb-8">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Contact Me</h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        Get in touch with me for any inquiries or collaborations
                    </p>
                </div>
                <div className="flex lg:flex-row  flex-col lg:justify-between gap-x-24">
                    <Image alt="Erkam Kiris" src={ErkamImg} className="rounded-full object-contain lg:max-w-md" />
                    <div className="space-y-4 mt-4 flex flex-col gap-2">
                        <Card>
                            <CardHeader>
                                <div className="flex flex-row justify-center gap-4 w-full items-center py-2">
                                    <Link href="https://github.com/erkamkrs" aria-label="GitHub" className="text-foreground/60 hover:text-foreground">
                                        <BsGithub className="h-6 w-6" />
                                    </Link>
                                    <Link href="https://www.linkedin.com/in/erkamkiris/" aria-label="LinkedIn" className="text-foreground/60 hover:text-foreground">
                                        <BsLinkedin className="h-6 w-6" />
                                    </Link>
                                </div>
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
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-6 w-full">
                                    <TextInput label="Full Name" {...register('name', { required: true })} required />
                                    <TextInput label="Email" type="email" {...register('email', { required: true })} required />
                                    <TextInput label="Message" {...register('message', { required: true })} />
                                    <Button type="submit"  variant={"default"}>
                                        Send
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
