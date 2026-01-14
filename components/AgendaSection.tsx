export default function AgendaSection() {
    const items = [
        {
            title: "Welcome & Opening",
            speaker: "Sudipto Mitra, CRO Simplilearn",
            description: "Why capability-building is now a board-level issue and what's changing in the workforce landscape."
        },
        {
            title: "Keynote:\nWhat Enterprise Leaders Are Seeing on the Ground",
            speaker: "Rob Lauber, Former CLO McDonald's",
            description: "A grounded view of how AI and AI agents are reshaping work, workflows, and leadership across industries."
        },
        {
            title: "Lunch & Executive Conversation",
            speaker: "Industry Experts Invited",
            description: "What large enterprise talent ecosystems are learning about capability-building at scale."
        }
    ];

    return (
        <section className="py-16 bg-cyan-accent">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Section Header */}
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-black">Event Agenda</h2>
                </div>

                {/* Agenda Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {items.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg p-6 flex flex-col h-full">
                            {/* Main Content Box */}
                            <div className="bg-cyan-accent/20 rounded-lg p-5 flex-grow flex flex-col">
                                {/* Title */}
                                <div className="text-base font-bold text-black mb-3 whitespace-pre-line leading-snug">
                                    {item.title}
                                </div>

                                {/* Speaker */}
                                <div className="text-sm text-black/80 mb-4 font-medium">
                                    {item.speaker}
                                </div>

                                {/* Description */}
                                <div className="text-sm text-black/70 leading-relaxed mt-auto">
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
