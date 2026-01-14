'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen bg-deep-navy text-white overflow-hidden flex flex-col items-center justify-center px-4 py-20">
            {/* Background Graphic */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.png"
                    alt="Background Mesh"
                    fill
                    className="object-cover opacity-50 select-none pointer-events-none"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-deep-navy via-deep-navy/40 to-transparent"></div>
            </div>

            <div className="container mx-auto z-10 max-w-6xl">
                <div className="flex flex-col items-start gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        {/* Invite Only Badge and Subtitle */}
                        <div className="mb-4 flex items-center gap-3">
                            <span className="inline-block bg-cyan-accent text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                                Invite-Only
                            </span>
                            <span className="text-white text-sm">An Executive Roundtable • Lunch</span>
                        </div>

                        <div className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                            <span className="text-primary-orange italic">simpli</span>learn
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl"
                    >
                        The Skills That <span className="text-primary-orange italic">Matter Next</span>:
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-2xl md:text-3xl text-zinc-300 max-w-2xl font-light"
                    >
                        Preparing Your Workforce & Leaders for the AI Era
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col gap-4 mt-8 bg-black/30 p-8 border-l-4 border-primary-orange backdrop-blur-sm"
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-primary-orange">📅</span>
                            <span className="text-lg">February 20, 2026</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-primary-orange">📍</span>
                            <span className="text-lg">Chamberlain&apos;s Steak & Fish House, Dallas, TX</span>
                        </div>
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="mt-8 px-10 py-5 bg-primary-orange text-black font-bold rounded-sm tracking-widest hover:bg-orange-400 transition-all uppercase shadow-[0_0_20px_rgba(245,171,64,0.4)]"
                        onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Send RSVP Email
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
