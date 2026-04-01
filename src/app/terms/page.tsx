import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-pearl">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-6 py-40">
        <h1 className="text-5xl font-black text-brand-text mb-12 uppercase tracking-tighter">Terms of Service</h1>
        <div className="prose prose-zinc prose-xl max-w-none space-y-12 text-brand-muted font-medium">
          <section>
            <h2 className="text-2xl font-black text-brand-text uppercase mb-4 tracking-widest">Scope of Service</h2>
            <p>Shryxa provides specialized software engineering and AI implementation services. All project scopes are defined in individual statements of work (SOW) agreed upon during the consultation phase.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-brand-text uppercase mb-4 tracking-widest">Intellectual Property</h2>
            <p>Unless otherwise specified, all custom code and AI infrastructure developed for a client will be the intellectual property of the client upon final payment. Foundational Shryxa libraries remain our property.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-brand-text uppercase mb-4 tracking-widest">Project Lifecycle</h2>
            <p>Project success is dependent on mutual cooperation. Timely feedback during the discovery and development phases is required to maintain deployment schedules.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-brand-text uppercase mb-4 tracking-widest">AI Reliability</h2>
            <p>While we implement state-of-the-art AI guardrails and RAG architectures, we do not guarantee 100% accuracy of LLM outputs. AI solutions should be monitored as part of a human-in-the-loop system.</p>
          </section>

          <section>
             <h2 className="text-2xl font-black text-brand-text uppercase mb-4 tracking-widest">Liability</h2>
             <p>Shryxa is not liable for indirect or consequential damages arising from the use of our engineering solutions beyond the scope of the project fee.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
