'use client';

import { useState } from 'react';
import { submitRSVP } from '@/app/actions';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function RSVPForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        const formData = new FormData(e.currentTarget);
        const result = await submitRSVP(formData);

        if (result.success) {
            setStatus('success');
            e.currentTarget.reset();
        } else {
            setStatus('error');
            setMessage(result.error || 'Something went wrong');
        }
    };

    return (
        <section id="rsvp" className="py-24 bg-deep-navy text-white relative overflow-hidden">
            {/* Background Graphic */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                <div className="w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(0,255,255,0.4),transparent_70%)]"></div>
            </div>

            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-3xl shadow-2xl">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 italic text-primary-orange uppercase tracking-tighter">RSVP Now</h2>
                        <p className="text-zinc-400 text-lg">Secure your spot at the Simplilearn Dallas Round Table.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-zinc-300">FullName</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="John Doe"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-orange transition-all placeholder:text-zinc-600"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-zinc-300">Corporate Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="john@company.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-orange transition-all placeholder:text-zinc-600"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="company" className="block text-sm font-semibold mb-2 text-zinc-300">Company Name</label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                placeholder="Enterprise Inc."
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-orange transition-all placeholder:text-zinc-600"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full bg-primary-orange text-black font-black py-4 rounded-lg text-lg uppercase tracking-widest hover:bg-orange-400 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                            {status === 'loading' ? (
                                <>
                                    <Loader2 className="animate-spin" />
                                    Processing...
                                </>
                            ) : (
                                'Send RSVP Email'
                            )}
                        </button>

                        {status === 'success' && (
                            <div className="flex items-center gap-2 p-4 bg-green-500/20 text-green-400 border border-green-500/30 rounded-lg">
                                <CheckCircle2 size={20} />
                                <span>RSVP sent successfully! See you in Dallas.</span>
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="flex items-center gap-2 p-4 bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg">
                                <AlertCircle size={20} />
                                <span>{message}</span>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
