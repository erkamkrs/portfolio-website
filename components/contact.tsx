"use client"
import React, { useId } from "react";
import { Mail,} from "lucide-react";
import { BsGithub, BsLinkedin, BsDownload } from "react-icons/bs";
import Link from "next/link";
import ErkamImg from "@/public/developer2.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input, FileInput } from "./ui/input";
import { sendEmail } from "@/lib/contactEmail";
import { useForm } from 'react-hook-form';
import { useToast } from "@/hooks/use-toast"
import { FadeIn } from "./ui/fadeIn";

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
    attachment: FileList;
};

export default function Contact() {
    const { register, handleSubmit, reset } = useForm<FormData>();
    const { toast } = useToast();

    async function onSubmit(data: FormData) {
        try {
            await sendEmail({
                ...data,
                attachment: Array.from(data.attachment)
            });
            toast({
                title: "Message Sent",
                description: "Your message has been sent successfully",
                duration: 3000,
            });
            reset(); // Clear the form values
        } catch (error) {
            console.error(error);
            toast({
                title: "Error",
                description: "An error occurred while sending the message",
                duration: 3000,
            });
        }
    }


    return (
        <section id="contact" className="container py-8 md:py-12 lg:py-24">
            <FadeIn>
                <div className="mx-auto flex flex-col items-center space-y-4 text-center mb-8">
                    <div className="flex flex-col items-center space-y-4 text-center mb-8">
                        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Let&#39;s Work Together</h2>
                        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                            Get in touch with me for any inquiries or collaborations
                        </p>
                    </div>
                    <div className="flex lg:flex-row flex-col lg:justify-between gap-x-24">
                        <Image alt="Erkam Kiris" src={ErkamImg} className="rounded-full object-contain lg:max-w-md" />
                        <div className="space-y-4 flex flex-col">
                            <CardContent className="flex flex-row gap-2 items-center justify-between ">
                                <Link className="text-foreground/60 hover:text-foreground" href="mailto:erkamkiris@gmail.com">
                                    <Card className="flex flex-col items-center space-x-2 p-4 mx-auto hover:shadow-lg transition-transform hover:bg-gray-700 bg-gray-900">
                                        <Mail className="h-8 w-8 m-2" />
                                    </Card>
                                </Link>
                                <Link href="https://github.com/erkamkrs" aria-label="GitHub" className="text-foreground/60 hover:text-foreground">
                                    <Card className="flex flex-col items-center space-x-2 p-4 mx-auto hover:shadow-lg transition-transform hover:bg-gray-700 bg-gray-900">
                                        <BsGithub className="h-8 w-8 m-2" />
                                    </Card>
                                </Link>
                                <Link href="https://www.linkedin.com/in/erkam-k-219890110/" aria-label="LinkedIn" className="text-foreground/60 hover:text-foreground">
                                    <Card className="flex flex-col items-center space-x-2 p-4 mx-auto hover:shadow-lg transition-transform hover:bg-gray-700 bg-gray-900">
                                        <BsLinkedin className="h-8 w-8 m-2" />
                                    </Card>
                                </Link>
                                <a
                                    href="/Erkam_Kiris_CV.pdf"
                                    download="Erkam_Kiris_CV.pdf"
                                    className="text-foreground/60 hover:text-foreground">
                                    <Card className="flex flex-col items-center space-x-2 p-4 mx-auto hover:shadow-lg transition-transform hover:bg-gray-700 bg-gray-900">
                                        <BsDownload className="h-8 w-8 m-2" />
                                    </Card>
                                </a>
                            </CardContent>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Send a Message</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-6 w-full ">
                                        <TextInput label="Full Name" {...register('name', { required: true })} required />
                                        <TextInput label="Email" type="email" {...register('email', { required: true })} required />
                                        <TextInput label="Message" {...register('message', { required: true })} />
                                        <FileInput type="file"  {...register('attachment')} />
                                        <Button type="submit" variant={"default"} className="hover:bg-slate-300">
                                            Send
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </FadeIn >
        </section >
    );
}