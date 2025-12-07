// src\components\WaitlistForm.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Check, Copy, Loader2, Share2 } from "lucide-react";
import { useState } from "react";

export function WaitlistForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
    const [email, setEmail] = useState("");
    const [referralLink, setReferralLink] = useState("https://link3.io/?ref=user_123");
    const [copied, setCopied] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setStatus("success");
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(referralLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="waitlist" className="py-24 bg-neutral-900 text-neutral-50 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[100px]"></div>
                <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-xl mx-auto bg-neutral-800/50 backdrop-blur-xl border border-neutral-700 p-8 rounded-3xl shadow-2xl">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-2">
                            Join the Waitlist
                        </h2>
                        <p className="text-neutral-400">
                            Get early access and secure your handle.
                        </p>
                    </div>

                    {status === "success" ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center space-y-6"
                        >
                            <div className="h-16 w-16 bg-success/20 text-success rounded-full flex items-center justify-center mx-auto">
                                <Check className="h-8 w-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">You're on the list!</h3>
                                <p className="text-neutral-400 text-sm">
                                    Check your email to confirm. Share your link to get priority access.
                                </p>
                            </div>

                            <div className="bg-neutral-900/50 p-4 rounded-xl border border-neutral-700 space-y-4">
                                <Label className="text-left block text-xs uppercase tracking-wider text-neutral-500">Your Referral Link</Label>
                                <div className="flex gap-2">
                                    <Input
                                        readOnly
                                        value={referralLink}
                                        className="bg-neutral-950 border-neutral-700 text-neutral-300 font-mono text-xs"
                                    />
                                    <Button size="icon" variant="outline" className="shrink-0 border-neutral-700 bg-neutral-800 hover:bg-neutral-700 text-neutral-300" onClick={copyToClipboard}>
                                        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                    </Button>
                                </div>
                                <div className="flex gap-2 justify-center pt-2">
                                    <Button size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300 hover:bg-blue-400/10">
                                        <Share2 className="h-4 w-4 mr-2" /> Share on Twitter
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-neutral-300">Email Address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-neutral-900/50 border-neutral-700 text-white placeholder:text-neutral-600 focus-visible:ring-primary"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="handle" className="text-neutral-300">Desired Handle (Optional)</Label>
                                <div className="relative">
                                    <span className="absolute left-3 top-2.5 text-neutral-500 text-sm">@</span>
                                    <Input
                                        id="handle"
                                        type="text"
                                        placeholder="username"
                                        className="pl-7 bg-neutral-900/50 border-neutral-700 text-white placeholder:text-neutral-600 focus-visible:ring-primary"
                                    />
                                </div>
                            </div>
                            <div className="flex items-start gap-2 pt-2">
                                <input type="checkbox" id="creator" className="mt-1 rounded border-neutral-700 bg-neutral-900 text-primary focus:ring-primary" />
                                <Label htmlFor="creator" className="text-neutral-400 text-xs leading-normal font-normal">
                                    I am a creator with 15k+ followers (Priority Access)
                                </Label>
                            </div>

                            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white" size="lg" disabled={status === "loading"}>
                                {status === "loading" ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Joining...
                                    </>
                                ) : (
                                    "Join Waitlist — Get Early Access"
                                )}
                            </Button>
                            <p className="text-center text-[10px] text-neutral-500">
                                We respect your privacy. No spam, ever.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
