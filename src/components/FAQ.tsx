// src\components\FAQ.tsx
"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        q: "How do I earn money on Link3?",
        a: "You earn in two ways: 1) As a creator, you get paid when people view your content or remix it. 2) As a user, you earn OPX tokens for watching ads, curating quality content, and verifying provenance.",
    },
    {
        q: "Is this crypto? Do I need a wallet?",
        a: "Link3 uses blockchain for transparency and payments, but you don't need a wallet to start. We create a managed wallet for you automatically. You can cash out to your bank account.",
    },
    {
        q: "How does the remix license work?",
        a: "When you upload content, you set the remix terms (e.g., 10% royalty). If someone remixes your work, the smart contract automatically splits the revenue according to your terms.",
    },
    {
        q: "When will the platform launch?",
        a: "We are currently in private beta with select creators. The public beta is scheduled for Q4 2025. Join the waitlist to get early access.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-neutral-900 mb-12 text-center">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-neutral-200 rounded-xl overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="flex items-center justify-between w-full p-4 text-left bg-white hover:bg-neutral-50 transition-colors"
                            >
                                <span className="font-medium text-neutral-900">{faq.q}</span>
                                {openIndex === i ? <ChevronUp className="h-5 w-5 text-neutral-500" /> : <ChevronDown className="h-5 w-5 text-neutral-500" />}
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-4 pt-0 text-neutral-600 text-sm leading-relaxed border-t border-neutral-100 bg-neutral-50/50">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
