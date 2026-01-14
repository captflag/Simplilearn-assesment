import { Clock, Users, Bot, Zap, Heart, Trophy } from 'lucide-react';

const features = [
    {
        title: "Skills Decay",
        description: "every 2-3 years\nfaster for technical skills",
        icon: Clock
    },
    {
        title: "Manager Role Shift",
        description: "orchestrating\npeople + AI agents",
        icon: Users
    },
    {
        title: "Leaders + AI Co-Pilots",
        description: "requires sensemaking\nand systems thinking",
        icon: Bot
    },
    {
        title: "Frontline Capability",
        description: "now depends\non digital fluency",
        icon: Zap
    },
    {
        title: "Core Human Capabilities",
        description: "analytical reasoning\nand scenario planning",
        icon: Heart
    },
    {
        title: "Winning Organizations",
        description: "predict skills\nahead of demand",
        icon: Trophy
    }
];

export default function FeaturesGrid() {
    return (
        <section className="py-24 bg-white text-black">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-2">What We'll Explore</h2>
                    <p className="text-zinc-600 text-lg">The critical shifts every enterprise must plan for:</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="p-8 border border-zinc-100 hover:border-primary-blue/30 hover:shadow-xl transition-all group rounded-lg">
                            <div className="mb-6 p-4 bg-zinc-50 rounded-full w-fit group-hover:bg-primary-blue/10 transition-colors">
                                <feature.icon className="w-8 h-8 text-primary-blue" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-zinc-600 leading-relaxed whitespace-pre-line">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
