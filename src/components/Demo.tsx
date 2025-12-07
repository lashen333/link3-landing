// src\components\Demo.tsx
"use client";

import { Play } from "lucide-react";

export function Demo() {
    return (
        <section className="py-24 bg-neutral-50 border-y border-neutral-200">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-neutral-900 mb-4">
                        Experience the Future
                    </h2>
                    <p className="text-neutral-500 max-w-2xl">
                        See how easy it is to remix content, track provenance, and earn rewards.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto relative rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video group cursor-pointer">
                    {/* Video Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/50 group-hover:bg-neutral-900/30 transition-colors">
                        <div className="h-20 w-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Play className="h-8 w-8 text-white fill-white ml-1" />
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                        <p className="font-medium">Link3 Platform Demo</p>
                        <p className="text-sm text-neutral-300">0:35 • Auto-preview</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
