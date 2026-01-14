import Link from 'next/link';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-deep-navy/80 backdrop-blur-md border-b border-white/5">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between max-w-6xl">
                <Link href="/" className="text-2xl font-black tracking-tighter text-white">
                    <span className="text-primary-orange italic">simpli</span>learn
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#explore" className="text-sm font-semibold hover:text-primary-orange transition-colors uppercase tracking-widest">Explore</Link>
                    <Link href="#speakers" className="text-sm font-semibold hover:text-primary-orange transition-colors uppercase tracking-widest">Speakers</Link>
                    <Link href="#agenda" className="text-sm font-semibold hover:text-primary-orange transition-colors uppercase tracking-widest">Agenda</Link>
                    <Link href="#rsvp" className="bg-primary-orange text-black px-6 py-2 rounded-sm text-sm font-black hover:bg-orange-400 transition-all uppercase tracking-widest">
                        RSVP
                    </Link>
                </nav>

                <button className="md:hidden text-white">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </header>
    );
}
