// src\components\HowItWorks.tsx
"use client";

import { motion } from "framer-motion";
import { Fingerprint, Repeat, Tv } from "lucide-react";

const steps = [
    {
        icon: Fingerprint,
        title: "Create or claim",
        desc: "Proof of Origin. Upload your work and we generate an immutable on-chain record.",
        color: "text-primary",
        bg: "bg-primary/10",
    },
    {
        icon: Repeat,
        title: "Remix, license, and share",
        desc: "Revenue automatically split. Others can remix your work, and you get paid instantly.",
        color: "text-accent",
        bg: "bg-accent/10",
    },
    {
        icon: Tv,
        title: "Watch, verify, earn",
        desc: "Normal users receive rewards. Earn OPX tokens just for curating and watching quality content.",
        color: "text-success",
        bg: "bg-success/10",
    },
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-neutral-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-neutral-900 mb-4">
                        How Link3 Works
                    </h2>
                    <p className="text-neutral-500 text-lg">
                        A fair ecosystem where value flows to everyone who contributes.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-neutral-200 -z-10"></div>

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className={`h-24 w-24 rounded-2xl ${step.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative bg-white border border-neutral-100 shadow-sm`}>
                                <step.icon className={`h-10 w-10 ${step.color}`} />
                                <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-white border border-neutral-100 shadow-sm flex items-center justify-center font-bold text-neutral-400">
                                    {i + 1}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 mb-2">{step.title}</h3>
                            <p className="text-neutral-500 leading-relaxed max-w-xs">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
