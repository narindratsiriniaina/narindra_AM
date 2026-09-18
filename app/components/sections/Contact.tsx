export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white/50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Contact</h2>
        <p className="text-foreground/70 mb-8">
          N&apos;hésitez pas à me contacter pour discuter de votre projet.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:contact@ankafa-mt.dev"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white rounded-xl font-medium hover:bg-accent/90 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            contact@ankafa-mt.dev
          </a>
          <a
            href="tel:+33600000000"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-white rounded-xl font-medium hover:bg-foreground/90 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            +33 6 00 00 00 00
          </a>
        </div>
      </div>
    </section>
  );
}
