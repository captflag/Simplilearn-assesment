import Image from 'next/image';

const speakers = [
    {
        name: "Rob Lauber",
        role: "Founder, West_Oakland Advisory",
        bio: "Rob Lauber is a global workforce and capability-building leader with over 25 years of experience helping organizations prepare leaders and frontline teams for change. Most recently, he served as EVP and Chief Learning Officer at McDonald's, leading learning and development across 37,000+ restaurants worldwide. His perspective is especially relevant as organizations rethink leadership and capability models in the age of AI.",
        image: "/rob.png"
    },
    {
        name: "Krishna Kumar",
        role: "Founder & CEO, Simplilearn",
        bio: "Krishna Kumar is the Founder and CEO of Simplilearn, working closely with enterprises navigating workforce transformation driven by AI and digital change. At the center of the learning and skills ecosystem, he brings a unique perspective on how roles, leadership expectations, and capabilities are evolving across industries. Through direct engagement with enterprise leaders, he sees what scales, and what doesn't in the promises shaping workforce strategy today.",
        image: "/krishna.png"
    },
    {
        name: "Sudipto Mitra",
        role: "Former President, Simplilearn",
        bio: "Sudipto Mitra is the Former President of Simplilearn with over 20 years of experience driving growth and excellence across multiple geographies. He plays a critical role as an operating leader of Simplilearn, leading teams and building operational efficiency.",
        image: "/sudipto.png"
    }
];

export default function SpeakersSection() {
    return (
        <section className="py-24 bg-primary-blue">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary-orange">Featured Speakers</h2>
                </div>

                <div className="space-y-8">
                    {speakers.map((speaker, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-6 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                            <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0">
                                <Image
                                    src={speaker.image}
                                    alt={speaker.name}
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                            <div className="flex-1 text-white">
                                <h3 className="text-2xl font-bold mb-1">{speaker.name}</h3>
                                <p className="text-primary-orange font-semibold mb-4">{speaker.role}</p>
                                <p className="text-white/90 leading-relaxed text-sm">
                                    {speaker.bio}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Expert Perspectives */}
                <div className="mt-12 p-6 border-2 border-cyan-accent rounded-lg">
                    <p className="text-white/90 leading-relaxed">
                        Invited experts from leading consulting and enterprise learning organizations will contribute short perspectives, offering insight into how large organizations are evolving skills and leadership models in the AI era.
                    </p>
                </div>
            </div>
        </section>
    );
}
