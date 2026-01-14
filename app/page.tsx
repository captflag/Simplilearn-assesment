import HeroSection from "@/components/HeroSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import SpeakersSection from "@/components/SpeakersSection";
import AgendaSection from "@/components/AgendaSection";
import RSVPForm from "@/components/RSVPForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      {/* Blue Quote Banner */}
      <section className="py-8 bg-primary-blue">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-white text-center text-lg leading-relaxed">
            You may RSVP by emailing siham.aba@simplilearn.net or by clicking the button below to send your confirmation.
          </p>
        </div>
      </section>

      {/* Main Quote Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-light text-zinc-800 leading-relaxed italic">
            &quot;Which capabilities will matter most, and how do we build them at scale?&quot;
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12 text-left text-zinc-600">
            <p className="leading-loose">
              As the AI era rapidly transforms the global business landscape, organizations are facing a critical crossroads. The skills that once defined success are rapidly decaying, replaced by a new set of digital and cognitive capabilities.
            </p>
            <p className="leading-loose">
              This exclusive round table brings together industry visionaries and learning leaders to dismantle the current leadership models and build a roadmap for the future workforce.
            </p>
          </div>
        </div>
      </section>

      <FeaturesGrid />
      <SpeakersSection />

      {/* Insights Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-primary-orange">
              Go behind the curtain with real examples and high-scale insights
            </h2>
            <p className="text-zinc-700 mb-8 leading-relaxed">
              You&apos;ll walk away with:
            </p>
            <ul className="space-y-6">
              {[
                "A clear view of the leadership & workforce capabilities that will matter most over the next 24-36 months.",
                "Insight from high-scale operating environments including the former CLO of McDonald&apos;s on what truly works and what breaks under pressure.",
                "Signals on where capability gaps may already be forming in your organization.",
                "Peer-validated perspectives from leaders running operations, talent, and transformation ecosystems at scale.",
                "Actionable insights you can raise straight into your next exec meeting."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-1 w-2 h-2 rounded-full bg-black shrink-0"></span>
                  <p className="text-zinc-700 leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
            <div className="mt-12 pt-8 border-t border-zinc-200">
              <p className="text-zinc-700 leading-relaxed">
                You may RSVP by emailing <span className="font-semibold">siham.aba@simplilearn.net</span> or by clicking the button below to send your confirmation.
              </p>
            </div>
          </div>
          <div className="flex-1 relative aspect-square w-full max-w-md">
            <div className="absolute inset-0 bg-zinc-100 rounded-3xl rotate-3 shadow-sm"></div>
            <div className="absolute inset-0 bg-zinc-50 rounded-3xl -rotate-3 border border-zinc-200 flex items-center justify-center p-12">
              {/* 3D Graphic Placeholder */}
              <div className="text-zinc-300 font-black text-9xl opacity-20 select-none">3D</div>
            </div>
          </div>
        </div>
      </section>

      <AgendaSection />
      <RSVPForm />
      <Footer />
    </main>
  );
}
