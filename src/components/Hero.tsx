// src\components\Hero.tsx
"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Play, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GravityParticles } from "./GravityParticles";

export function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
            <GravityParticles />
            <div className="container relative z-10 mx-auto px-6 md:px-8 lg:px-12">
                {/* Main content - use more width */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
                        {/* Left side - Text content */}
                        <div className="flex flex-col justify-center space-y-6 lg:space-y-8">
                            <div className="space-y-5">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-base font-medium text-neutral-600 shadow-sm"
                                >
                                    <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                                    Join 10,000+ early supporters
                                </motion.div>
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl xl:text-7xl text-balance text-neutral-900 leading-tight"
                                >
                                    Where creators own their work. <span className="text-primary">Everyone earns.</span>
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="text-neutral-500 text-xl md:text-2xl leading-relaxed"
                                >
                                    Provenance, fair royalties, and attention rewards — for creators and fans.
                                </motion.p>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="flex flex-col gap-4 min-[400px]:flex-row"
                            >
                                <Button size="lg" className="gap-2 text-base px-6 py-6" onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Join the Waitlist <ArrowRight className="h-5 w-5" />
                                </Button>
                                <Button size="lg" variant="outline" className="text-base px-6 py-6" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
                                    How it works
                                </Button>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="flex items-center gap-4 text-base text-neutral-500"
                            >
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-neutral-200 flex items-center justify-center text-sm font-bold text-neutral-600">
                                            U{i}
                                        </div>
                                    ))}
                                </div>
                                <p>Trusted by top creators</p>
                            </motion.div>
                        </div>

                        {/* Right side - Phone mockup */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                x: mousePosition.x * -0.5,
                                y: mousePosition.y * -0.5,
                            }}
                            transition={{
                                opacity: { duration: 0.8, delay: 0.3 },
                                scale: { duration: 0.8, delay: 0.3 },
                                default: { type: "spring", stiffness: 80, damping: 25 }
                            }}
                            className="mx-auto lg:mx-0 relative"
                        >
                            {/* Device Mockup */}
                            <div className="relative w-[280px] h-[560px] bg-neutral-900 rounded-[2.5rem] border-[6px] border-neutral-900 shadow-2xl overflow-hidden mx-auto">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-neutral-900 rounded-b-xl z-20"></div>
                                <div className="w-full h-full bg-neutral-50 relative overflow-hidden">
                                    {/* Mock App UI */}
                                    <div className="p-4 pt-10 space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="h-8 w-8 rounded-full bg-neutral-200"></div>
                                            <div className="h-4 w-24 rounded bg-neutral-200"></div>
                                        </div>
                                        {/* Feed Card */}
                                        <div className="bg-white p-3 rounded-2xl shadow-sm border border-neutral-100 space-y-3">
                                            <div className="aspect-square rounded-xl bg-neutral-100 relative overflow-hidden group">
                                                <div className="absolute top-2 right-2 bg-black/50 backdrop-blur text-white text-[10px] px-2 py-1 rounded-full flex items-center gap-1">
                                                    <ShieldCheck className="h-3 w-3 text-primary" /> Original
                                                </div>
                                                <div className="absolute inset-0 flex items-center justify-center text-neutral-300">
                                                    <Play className="h-12 w-12 fill-current" />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="h-4 w-3/4 rounded bg-neutral-100"></div>
                                                <div className="flex justify-between items-center">
                                                    <div className="h-3 w-1/3 rounded bg-neutral-100"></div>
                                                    <div className="flex items-center gap-1 text-[10px] text-success font-medium bg-success/10 px-2 py-0.5 rounded-full">
                                                        <Zap className="h-3 w-3" /> +12 OPX
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Feed Card 2 */}
                                        <div className="bg-white p-3 rounded-2xl shadow-sm border border-neutral-100 space-y-3 opacity-50">
                                            <div className="aspect-video rounded-xl bg-neutral-100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Floating Elements - better positioned */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-16 -left-8 md:-left-12 bg-white p-2.5 md:p-3 rounded-xl shadow-lg border border-neutral-100 flex items-center gap-2 md:gap-3"
                            >
                                <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <ShieldCheck className="h-4 w-4 md:h-5 md:w-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] md:text-xs text-neutral-500">Provenance</p>
                                    <p className="text-xs md:text-sm font-bold">Verified</p>
                                </div>
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-32 -right-6 md:-right-8 bg-white p-2.5 md:p-3 rounded-xl shadow-lg border border-neutral-100 flex items-center gap-2 md:gap-3"
                            >
                                <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-success/10 flex items-center justify-center text-success">
                                    <Zap className="h-4 w-4 md:h-5 md:w-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] md:text-xs text-neutral-500">Earnings</p>
                                    <p className="text-xs md:text-sm font-bold">+$24.50</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
