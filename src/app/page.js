'use client';
import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#2d4a43] font-sans antialiased">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-[#f4f1ea]/90 backdrop-blur-md border-b border-[#2d4a43]/10">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-serif text-xl font-bold tracking-wide text-[#2d4a43]">
            Dr. Maya Reynolds, PsyD
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#about" className="hover:text-[#d4af37] transition-colors">About</a>
            <a href="#services" className="hover:text-[#d4af37] transition-colors">Specialties</a>
            <a href="#office" className="hover:text-[#d4af37] transition-colors">Our Office</a>
            <a href="#contact" className="px-5 py-2.5 rounded-full bg-[#2d4a43] text-white hover:bg-[#2d4a43]/90 transition-all shadow-sm">
              Book Consultation
            </a>
          </nav>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#2d4a43] focus:outline-none"
          >
            ☰
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#f4f1ea] border-b border-[#2d4a43]/10 px-6 py-4 space-y-3">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-sm">About</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-sm">Specialties</a>
            <a href="#office" onClick={() => setMobileMenuOpen(false)} className="block text-sm">Our Office</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-[#2d4a43]">Book Consultation</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-28 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 space-y-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#d4af37] block">
            Licensed Clinical Psychologist • Santa Monica, CA
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2d4a43] leading-tight">
            Anxiety, Trauma & Burnout Therapy in Santa Monica, CA
          </h1>
          <p className="text-lg text-[#2d4a43]/80 leading-relaxed">
            Warm, collaborative, and evidence-based psychological care for high-achieving adults, creatives, and professionals navigating stress, overthinking, and past experiences.
          </p>
          <div className="pt-2 flex items-center space-x-4">
            <a href="#contact" className="px-8 py-3.5 rounded-full bg-[#2d4a43] text-white font-medium hover:bg-[#2d4a43]/90 transition-all shadow-md">
              Schedule a Consultation
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="w-full bg-[#2d4a43]/10 rounded-2xl overflow-hidden relative shadow-lg aspect-[4/5]">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
              alt="Dr. Maya Reynolds" 
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-in-out hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white/60 border-y border-[#2d4a43]/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-[#d4af37]"></div>
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          <div className="space-y-4 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#d4af37]">About</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2d4a43]">
              Dr. Maya Reynolds, PsyD
            </h2>
          </div>
          <div className="space-y-8 text-[#2d4a43]/80 leading-relaxed text-lg md:text-xl font-light italic">
            <p>
              "I'm a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge."
            </p>
            <p>
              "I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate evidence-based methods such as Cognitive Behavioral Therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques."
            </p>
            <p>
              "Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as complex, long-standing patterns from childhood, relationships, or chronic stress."
            </p>
          </div>
        </div>
      </section>

      {/* Services / Specialties Section */}
      <section id="services" className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#d4af37]">Expertise</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2d4a43]">Specialized Clinical Services</h2>
          <p className="text-[#2d4a43]/80">Tailored, evidence-based care designed to foster deep healing and sustainable resilience.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#2d4a43]/10 space-y-4 transition-all hover:shadow-md">
            <h3 className="text-xl font-serif font-bold text-[#2d4a43]">Anxiety & Panic Therapy</h3>
            <p className="text-[#2d4a43]/80 text-sm leading-relaxed">
              Support for constant worry, perfectionism, overthinking, and feeling internally on edge despite outward success.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#2d4a43]/10 space-y-4 transition-all hover:shadow-md">
            <h3 className="text-xl font-serif font-bold text-[#2d4a43]">Trauma & EMDR</h3>
            <p className="text-[#2d4a43]/80 text-sm leading-relaxed">
              Evidence-based therapy paced carefully for single-incident and complex relational trauma, emphasizing safety and regulation.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#2d4a43]/10 space-y-4 transition-all hover:shadow-md">
            <h3 className="text-xl font-serif font-bold text-[#2d4a43]">Burnout & Stress Management</h3>
            <p className="text-[#2d4a43]/80 text-sm leading-relaxed">
              Tailored psychological support for entrepreneurs, professionals, and creatives feeling disconnected from constant pressure.
            </p>
          </div>
        </div>
      </section>

      {/* New Custom Section: Our Office */}
      <section id="office" className="py-24 bg-[#2d4a43]/5 border-t border-[#2d4a43]/10">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#d4af37]">Practice Space</span>
            <h2 className="text-4xl font-serif font-bold text-[#2d4a43]">
              Our Office – A Calm Space for Healing
            </h2>
          </div>
          <p className="max-w-3xl mx-auto text-[#2d4a43]/80 leading-relaxed text-lg italic">
            Located in Santa Monica, California, our quiet and private office is thoughtfully designed with natural light, comfortable seating, and a grounding environment so you feel safe and at ease.
          </p>

          <div className="text-sm font-medium text-[#2d4a43] space-y-2 pt-4">
            <p>📍 <strong>Address:</strong> 123th Street 45 W, Santa Monica, CA 90401</p>
            <p>🌿 <strong>Availability:</strong> In-Person Therapy in Santa Monica & Secure Telehealth across California</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto pt-10">
            <div className="overflow-hidden rounded-3xl shadow-lg border border-[#2d4a43]/10">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80" 
                alt="Therapy Office Interior Santa Monica" 
                className="w-full h-80 object-cover transition-transform duration-700 ease-in-out hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-3xl shadow-lg border border-[#2d4a43]/10">
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80" 
                alt="Counseling Room Setup" 
                className="w-full h-80 object-cover transition-transform duration-700 ease-in-out hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contact" className="py-20 bg-[#2d4a43] text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-serif font-bold">Ready to take the next step?</h2>
            <p className="text-white/80 leading-relaxed">
              Reach out to schedule your initial consultation or learn more about in-person sessions in Santa Monica and telehealth across California.
            </p>
          </div>
          <div className="bg-[#2d4a43]/20 p-8 rounded-3xl space-y-4 text-sm text-white/90 border border-white/10">
            <p>📍 <strong>Location:</strong> 123th Street 45 W, Santa Monica, CA 90401</p>
            <p>✉️ <strong>Email:</strong> contact@drmayareynolds.com</p>
            <p className="pt-4">
              <a href="mailto:contact@drmayareynolds.com" className="inline-block px-8 py-3.5 rounded-full bg-[#f4f1ea] text-[#2d4a43] font-medium hover:bg-white transition-colors shadow-lg">
                Get in Touch
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}