import Image from "next/image";
import { texts } from "@/app/lib/texts";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

function SocialIcon({ name }: { name: "facebook" | "mail" | "github" | "linkedin" }) {
  if (name === "mail") {
    return <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="m3 7 9 6 9-6M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z" /></svg>;
  }

  if (name === "github") {
    return <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.56 9.56 0 0 1 12 6.84a9.6 9.6 0 0 1 2.5.34c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.56 4.94.36.31.68.92.68 1.86v2.73c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" /></svg>;
  }

  if (name === "linkedin") {
    return <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M5.5 3A2.5 2.5 0 1 0 5.5 8 2.5 2.5 0 0 0 5.5 3ZM3.5 9.5h4v11h-4v-11Zm6.5 0h3.8v1.5h.05c.53-1 1.83-2 3.77-2 4.03 0 4.78 2.65 4.78 6.1v5.4h-4v-4.8c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.88h-4v-11Z" /></svg>;
  }

  return <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M14 8h3V5h-3c-2.21 0-4 1.79-4 4v2H7v3h3v5h3v-5h3l1-3h-4V9c0-.55.45-1 1-1Z" /></svg>;
}

const socials = [
  { name: "facebook" as const, label: "Facebook", href: "#contact", configured: false },
  { name: "mail" as const, label: "Gmail", href: "mailto:Narindratsiry18@gmail.com", configured: true },
  { name: "github" as const, label: "GitHub", href: "https://github.com/Narindratsiry-218I24", configured: true },
  { name: "linkedin" as const, label: "LinkedIn", href: "https://linkedin.com/in/narindra-tsiriniaina-698b90303", configured: true },
];

export default function Hero() {
  const h = texts.hero;

  return (
    <section id="accueil" className="hero-enter relative isolate overflow-hidden bg-background pt-28 sm:pt-32 lg:pt-32">
      <div aria-hidden="true" className="absolute -left-32 top-40 -z-10 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      <div aria-hidden="true" className="absolute right-[-10rem] top-24 -z-10 h-[34rem] w-[34rem] rounded-full border-[3rem] border-accent/10" />

      <div className="mx-auto grid max-w-[1140px] items-start gap-4 px-5 pb-4 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)_minmax(0,1fr)] lg:gap-4 lg:px-8 lg:pb-0 xl:px-0">
        <div className="order-2 max-w-md text-center lg:order-1 lg:mt-48 lg:-translate-x-12 lg:justify-self-end lg:text-left">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.24em] text-accent">Des idées aux solutions numériques.</span>
          <h2 className="text-xl font-bold leading-tight text-foreground sm:text-2xl">Je transforme vos idées en expériences utiles.</h2>
          <p className="mt-4 text-sm leading-6 text-foreground/70 sm:text-[15px]">Je conçois des applications web et mobiles intuitives, performantes et bien pensées.</p>
          <div className="mt-7 hidden h-px w-20 bg-accent lg:block" />
        </div>

        <div className="order-1 flex flex-col items-center text-center lg:order-2">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-accent">Bonjour, je suis</p>
          <h1 className="text-2xl font-extrabold leading-none tracking-tight text-foreground sm:text-3xl lg:text-3xl">Narindra Tsiry</h1>
          <p className="mt-3 text-lg font-bold text-accent sm:text-xl">{h.specialty}</p>
          <p className="mt-1 text-xs text-foreground/65 sm:text-sm">Architecture et conception de projets</p>

          <div className="relative mt-6 h-[330px] w-full max-w-[460px] sm:h-[390px] lg:-mt-1 lg:h-[430px]">
            <div aria-hidden="true" className="absolute bottom-4 left-1/2 h-[82%] w-[82%] -translate-x-1/2 rounded-[48%_52%_45%_55%/52%_45%_55%_48%] bg-accent/15" />
            <div aria-hidden="true" className="absolute bottom-7 left-1/2 h-[70%] w-[70%] -translate-x-1/2 rounded-full border border-accent/25" />
            <Image src="/images/narindra.png" alt={h.imageAlt} fill priority sizes="(max-width: 768px) 90vw, 480px" className="relative z-10 object-contain object-bottom" />
            <div className="absolute bottom-1 left-1/2 z-20 flex w-max max-w-[calc(100%-1rem)] -translate-x-1/2 gap-2 rounded-full border border-white/70 bg-background/95 p-1.5 shadow-lg backdrop-blur-sm sm:gap-3">
              <a href="#projet" className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:px-5 sm:text-sm">Voir mes projets <ArrowIcon /></a>
              <a href="#contact" className="inline-flex items-center rounded-full border border-foreground/15 bg-white/80 px-4 py-2.5 text-xs font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:px-5 sm:text-sm">Me contacter</a>
            </div>
          </div>
        </div>

        <div className="order-3 flex flex-row justify-center gap-3 lg:mt-48 lg:translate-x-12 lg:flex-col lg:items-start lg:justify-self-start">
          <p className="sr-only">Réseaux sociaux</p>
          {socials.map((social) => social.configured ? (
            <a key={social.label} href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined} rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={social.label} title={social.label} className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 bg-white/60 text-foreground transition hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"> <SocialIcon name={social.name} /> </a>
          ) : (
            <span key={social.label} title="Lien Facebook non configuré" aria-label="Facebook, lien non configuré" className="flex h-11 w-11 cursor-not-allowed items-center justify-center rounded-full border border-foreground/10 bg-white/40 text-foreground/40"> <SocialIcon name={social.name} /> </span>
          ))}
        </div>
      </div>
    </section>
  );
}
