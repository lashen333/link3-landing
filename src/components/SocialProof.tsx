// src\components\SocialProof.tsx
"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        quote: "Finally, a platform that understands remix culture. I get paid when people use my beats.",
        author: "Alex Rivera",
        role: "Music Producer",
        handle: "@arivera_beats",
    },
    {
        quote: "The provenance engine is a game changer. No more stolen art. Just pure creation.",
        author: "Sarah Chen",
        role: "Digital Artist",
        handle: "@schen_art",
    },
];

export function SocialProof() {
    return (
        <section className="py-12 border-y border-neutral-200 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                    {/* Metrics Ticker */}
                    <div className="flex items-center gap-4">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-neutral-200 flex items-center justify-center text-xs font-bold text-neutral-600">
                                    U{i}
                                </div>
                            ))}
                        </div>
                        <div>
                            <p className="text-sm font-medium text-neutral-900">2,400+ Creators Joined</p>
                            <p className="text-xs text-neutral-500">Waitlist slots filling fast</p>
                        </div>
                    </div>

                    {/* Testimonials */}
                    <div className="grid gap-4 md:grid-cols-2 max-w-2xl">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-neutral-50 p-4 rounded-xl border border-neutral-100"
                            >
                                <div className="flex gap-1 mb-2">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <Star key={s} className="h-3 w-3 fill-primary text-primary" />
                                    ))}
                                </div>
                                <p className="text-sm text-neutral-700 mb-2">"{t.quote}"</p>
                                <div className="flex items-center gap-2">
                                    <div className="h-6 w-6 rounded-full bg-neutral-200"></div>
                                    <div>
                                        <p className="text-xs font-bold text-neutral-900">{t.author}</p>
                                        <p className="text-[10px] text-neutral-500">{t.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
