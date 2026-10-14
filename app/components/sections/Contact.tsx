"use client";

import { useState } from "react";
import { texts } from "@/app/lib/texts";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const c = texts.contact;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white/60 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest text-accent mb-3 uppercase">
            {c.title}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {c.heading}
          </h2>
          <p className="text-foreground/70 text-base sm:text-lg">
            {c.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 bg-background rounded-2xl p-6 sm:p-8 border border-foreground/10 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-foreground mb-6">
              {c.coordinates}
            </h3>

            <a
              href="tel:+261387349943"
              className="flex items-start gap-4 p-3.5 rounded-xl hover:bg-white/80 transition-colors group"
            >
              <div className="w-11 h-11 rounded-lg bg-accent/15 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <span className="block text-xs font-semibold text-foreground/50 uppercase tracking-wider">
                  {c.phone}
                </span>
                <span className="text-base font-semibold text-foreground group-hover:text-accent transition-colors">
                  +261 38 73 499 43
                </span>
              </div>
            </a>

            <a
              href="mailto:narindraTsiriniaina366@gmail.com"
              className="flex items-start gap-4 p-3.5 rounded-xl hover:bg-white/80 transition-colors group"
            >
              <div className="w-11 h-11 rounded-lg bg-accent/15 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="min-w-0">
                <span className="block text-xs font-semibold text-foreground/50 uppercase tracking-wider">
                  {c.email}
                </span>
                <span className="text-base font-semibold text-foreground group-hover:text-accent transition-colors truncate block">
                  narindraTsiriniaina366@gmail.com
                </span>
              </div>
            </a>

            <div className="flex items-start gap-4 p-3.5 rounded-xl">
              <div className="w-11 h-11 rounded-lg bg-accent/15 text-accent flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0" />
                </svg>
              </div>
              <div>
                <span className="block text-xs font-semibold text-foreground/50 uppercase tracking-wider">
                  {c.address}
                </span>
                <span className="text-base font-medium text-foreground">
                  {c.addressValue}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-foreground/10 flex items-center gap-3">
              <a
                href="https://github.com/Narindratsiry-218I24"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white border border-foreground/10 text-xs font-semibold text-foreground hover:border-accent hover:text-accent transition-colors shadow-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                {c.github}
              </a>

              <a
                href="https://linkedin.com/in/narindra-tsiriniaina-698b90303"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white border border-foreground/10 text-xs font-semibold text-foreground hover:border-accent hover:text-accent transition-colors shadow-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
                </svg>
                {c.linkedin}
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-foreground/10 shadow-sm">
            <h3 className="text-xl font-bold text-foreground mb-6">
              {c.sendMessageTitle}
            </h3>

            {submitted ? (
              <div className="p-6 bg-accent/10 border border-accent/30 rounded-xl text-center space-y-2 animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h4 className="text-lg font-bold text-foreground">
                  {c.messageReceived}
                </h4>
                <p className="text-sm text-foreground/75">
                  {c.messageReceivedDesc}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-1.5">
                      {c.fullName}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Votre nom"
                      className="w-full px-4 py-3 rounded-xl bg-background/50 border border-foreground/15 text-foreground text-sm focus:outline-none focus:border-accent focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-1.5">
                      {c.email}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={c.emailPlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-background/50 border border-foreground/15 text-foreground text-sm focus:outline-none focus:border-accent focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder={c.messagePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-foreground/15 text-foreground text-sm focus:outline-none focus:border-accent focus:bg-white transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-accent text-white font-semibold text-sm shadow-md hover:bg-accent/90 transition-all transform hover:scale-[1.01] active:scale-[0.99]"
                >
                  {c.sendMessage}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
