import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-pearl">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-6 py-40">
        <h1 className="text-5xl font-black text-brand-text mb-12 uppercase tracking-tighter">Privacy Policy</h1>
        <div className="prose prose-zinc prose-xl max-w-none space-y-12 text-brand-muted font-medium">
          <section>
            <h2 className="text-2xl font-black text-brand-text uppercase mb-4 tracking-widest">Introduction</h2>
            <p>At Shryxa, we prioritize the privacy and security of our clients and visitors. This policy outlines how we collect, use, and safeguard your data when you interact with our AI-centric engineering services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-brand-text uppercase mb-4 tracking-widest">Data Collection</h2>
            <p>We collect information that you provide directly to us through consultation inquiries, contact forms, and email communications. This includes your name, contact information, and project requirements.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-brand-text uppercase mb-4 tracking-widest">AI & Data Usage</h2>
            <p>For AI implementation projects, we adhere strictly to your data sovereignty. We do not use your proprietary business data to train foundational models unless explicitly agreed upon in a data-sharing partnership.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-brand-text uppercase mb-4 tracking-widest">Your Rights</h2>
            <p>You have the right to access, rectify, or delete any personal information we hold. For requests, please contact us at shryxa.contact@gmail.com.</p>
          </section>

          <section>
             <h2 className="text-2xl font-black text-brand-text uppercase mb-4 tracking-widest">Cookies</h2>
             <p>We use essential cookies to maintain the performance and security of our digital platform. By using our site, you consent to this usage.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
