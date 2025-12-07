// src\components\Features.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Box, Coins, Eye, Shield, Store } from "lucide-react";
import Link from "next/link";

const features = [
    {
        icon: Box,
        title: "Provenance Engine",
        desc: "Immutable ownership for every piece of content. We track the lineage of every remix back to the original.",
        color: "text-primary",
    },
    {
        icon: Coins,
        title: "License & Remix Marketplace",
        desc: "Set your terms. Allow others to remix your work and automatically split the revenue. No contracts needed.",
        color: "text-accent",
    },
    {
        icon: Eye,
        title: "Attention Rewards (OPX)",
        desc: "Earn by watching. Curate the best content and get rewarded when it goes viral.",
        color: "text-success",
    },
    {
        icon: Store,
        title: "Creator Shops & Funding",
        desc: "Launch your store instantly. Access verified funding to scale your production without giving up equity.",
        color: "text-orange-500",
    },
    {
        icon: Shield,
        title: "AI Transparency & Safety",
        desc: "Clear labeling for AI-generated content. Protect your style from unauthorized training.",
        color: "text-blue-500",
    },
];

export function Features() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-neutral-900 mb-4">
                        Built for the Creator Economy 2.0
                    </h2>
                    <p className="text-neutral-500 text-lg">
                        Everything you need to own your audience and your income.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -6, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                            className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300"
                        >
                            <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-50 ${feature.color} group-hover:scale-110 transition-transform`}>
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-neutral-900">{feature.title}</h3>
                            <p className="mb-4 text-neutral-500 text-sm leading-relaxed">
                                {feature.desc}
                            </p>
                            <Link href="#" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                                Learn more <ArrowRight className="ml-1 h-3 w-3" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
