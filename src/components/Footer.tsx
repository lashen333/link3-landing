// src\components\Footer.tsx
import Link from "next/link";
import { Twitter, Instagram, Github } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-neutral-950 text-neutral-400 py-12 border-t border-neutral-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">Link3</h3>
                        <p className="text-sm">
                            The next-era social platform where creators own their work and everyone earns.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="hover:text-white transition-colors"><Twitter className="h-5 w-5" /></Link>
                            <Link href="#" className="hover:text-white transition-colors"><Instagram className="h-5 w-5" /></Link>
                            <Link href="#" className="hover:text-white transition-colors"><Github className="h-5 w-5" /></Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-medium text-white mb-4">Platform</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:text-primary transition-colors">How it Works</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">For Creators</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">For Investors</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium text-white mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium text-white mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-neutral-800 text-center text-xs">
                    <p>&copy; {new Date().getFullYear()} Link3 Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
