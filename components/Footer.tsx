export default function Footer() {
    return (
        <footer className="py-12 bg-black text-white border-t border-white/5">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-xl font-bold tracking-tight">
                        <span className="text-primary-orange italic">simpli</span>learn
                    </div>

                    <div className="text-zinc-500 text-sm text-center md:text-right">
                        <p className="mb-2">© 2026 Simplilearn Solutions. All Rights Reserved.</p>
                        <p>Venue: Chamberlain&apos;s Steak & Fish House | 5330 Belt Line Rd, Dallas, TX 75254</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
