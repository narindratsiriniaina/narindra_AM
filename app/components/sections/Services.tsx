"use client";

import { useEffect, useRef, useState } from "react";

interface Service {
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  illustration: React.ReactNode;
}

/* Illustrations vectorielles maison (style plat, palette du site) */

function IllustrationWebMobile() {
  return (
    <svg viewBox="0 0 220 150" className="w-full h-full">
      <ellipse cx="110" cy="110" rx="95" ry="30" fill="var(--accent)" opacity="0.12" />
      {/* Laptop */}
      <rect x="28" y="35" width="110" height="68" rx="6" fill="var(--foreground)" opacity="0.92" />
      <rect x="35" y="41" width="96" height="52" rx="2" fill="#1c130c" />
      <rect x="42" y="50" width="34" height="4" rx="2" fill="var(--accent)" />
      <rect x="42" y="59" width="50" height="3" rx="1.5" fill="#efe6d8" opacity="0.6" />
      <rect x="42" y="66" width="40" height="3" rx="1.5" fill="#efe6d8" opacity="0.4" />
      <rect x="42" y="73" width="46" height="3" rx="1.5" fill="#efe6d8" opacity="0.5" />
      <rect x="18" y="103" width="130" height="7" rx="3.5" fill="var(--foreground)" opacity="0.75" />
      {/* Phone */}
      <rect x="150" y="28" width="46" height="86" rx="9" fill="#ffffff" stroke="var(--foreground)" strokeOpacity="0.15" strokeWidth="2" />
      <rect x="157" y="40" width="32" height="24" rx="3" fill="var(--accent)" opacity="0.25" />
      <rect x="157" y="70" width="32" height="4" rx="2" fill="var(--foreground)" opacity="0.5" />
      <rect x="157" y="78" width="22" height="4" rx="2" fill="var(--foreground)" opacity="0.3" />
      <circle cx="173" cy="103" r="4" fill="var(--accent)" />
    </svg>
  );
}

function IllustrationDesign() {
  return (
    <svg viewBox="0 0 220 150" className="w-full h-full">
      <ellipse cx="110" cy="112" rx="95" ry="28" fill="var(--accent)" opacity="0.12" />
      {/* Monitor */}
      <rect x="34" y="28" width="112" height="72" rx="6" fill="#ffffff" stroke="var(--foreground)" strokeOpacity="0.15" strokeWidth="2" />
      <rect x="44" y="38" width="40" height="24" rx="3" fill="var(--accent)" opacity="0.3" />
      <rect x="88" y="38" width="46" height="11" rx="3" fill="var(--foreground)" opacity="0.15" />
      <rect x="88" y="51" width="30" height="11" rx="3" fill="var(--foreground)" opacity="0.1" />
      <rect x="44" y="66" width="90" height="24" rx="3" fill="var(--foreground)" opacity="0.08" />
      <rect x="70" y="100" width="16" height="8" fill="var(--foreground)" opacity="0.2" />
      {/* Phone */}
      <rect x="156" y="46" width="38" height="64" rx="8" fill="#ffffff" stroke="var(--foreground)" strokeOpacity="0.15" strokeWidth="2" />
      <rect x="162" y="54" width="26" height="18" rx="2" fill="var(--accent)" opacity="0.25" />
      <rect x="162" y="76" width="26" height="4" rx="2" fill="var(--foreground)" opacity="0.4" />
      {/* Palette */}
      <circle cx="34" cy="112" r="8" fill="var(--accent)" />
      <circle cx="48" cy="118" r="6" fill="var(--foreground)" opacity="0.6" />
      <circle cx="24" cy="122" r="5" fill="var(--accent)" opacity="0.5" />
    </svg>
  );
}

function IllustrationHosting() {
  return (
    <svg viewBox="0 0 220 150" className="w-full h-full">
      <ellipse cx="110" cy="112" rx="95" ry="28" fill="var(--accent)" opacity="0.12" />
      {/* Cloud */}
      <path
        d="M150 60c14 0 24 10 24 22 0 11-9 20-20 20h-46c-10 0-19-8-19-18 0-9 7-17 17-18 2-11 12-19 24-19 10 0 19 6 20 13z"
        fill="var(--accent)"
        opacity="0.9"
      />
      <path d="M150 65v22m0 0l-9-9m9 9l9-9" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Servers */}
      <rect x="30" y="58" width="76" height="18" rx="4" fill="var(--foreground)" opacity="0.85" />
      <rect x="30" y="80" width="76" height="18" rx="4" fill="var(--foreground)" opacity="0.75" />
      <rect x="30" y="102" width="76" height="18" rx="4" fill="var(--foreground)" opacity="0.65" />
      <circle cx="40" cy="67" r="2.5" fill="var(--accent)" />
      <circle cx="40" cy="89" r="2.5" fill="var(--accent)" />
      <circle cx="40" cy="111" r="2.5" fill="var(--accent)" />
      {/* terminal badge */}
      <rect x="150" y="98" width="40" height="24" rx="5" fill="#1c130c" />
      <text x="157" y="115" fontSize="12" fill="var(--accent)" fontFamily="monospace">
        {">_"}
      </text>
    </svg>
  );
}

function IllustrationArchitecture() {
  return (
    <svg viewBox="0 0 220 150" className="w-full h-full">
      <ellipse cx="110" cy="112" rx="95" ry="28" fill="var(--accent)" opacity="0.12" />
      {/* Board */}
      <rect x="26" y="26" width="100" height="72" rx="6" fill="#ffffff" stroke="var(--foreground)" strokeOpacity="0.15" strokeWidth="2" />
      <rect x="38" y="38" width="30" height="16" rx="3" fill="var(--accent)" opacity="0.25" />
      <rect x="78" y="38" width="34" height="16" rx="3" fill="var(--foreground)" opacity="0.1" />
      <path d="M53 54v8M95 54v8" stroke="var(--foreground)" strokeOpacity="0.35" strokeWidth="2" />
      <rect x="38" y="66" width="30" height="16" rx="3" fill="var(--foreground)" opacity="0.1" />
      <rect x="78" y="66" width="34" height="16" rx="3" fill="var(--accent)" opacity="0.25" />
      {/* Kanban columns */}
      <rect x="140" y="30" width="20" height="60" rx="4" fill="var(--foreground)" opacity="0.08" />
      <rect x="164" y="30" width="20" height="60" rx="4" fill="var(--foreground)" opacity="0.08" />
      <rect x="188" y="30" width="20" height="60" rx="4" fill="var(--foreground)" opacity="0.08" />
      <rect x="144" y="38" width="12" height="10" rx="2" fill="var(--accent)" opacity="0.6" />
      <rect x="168" y="50" width="12" height="10" rx="2" fill="var(--accent)" opacity="0.5" />
      <rect x="192" y="62" width="12" height="10" rx="2" fill="var(--accent)" opacity="0.9" />
      {/* Agile loop */}
      <circle cx="46" cy="118" r="14" fill="none" stroke="var(--accent)" strokeWidth="4" strokeDasharray="8 6" />
      <path d="M56 108l4 2-2 4" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

const services: Service[] = [
  {
    title: "Développement Web & Mobile",
    description:
      "Applications modernes, responsives et adaptées à vos besoins.",
    tags: ["Next.js", "Flutter", "React"],
    illustration: <IllustrationWebMobile />,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "UI / UX & Design",
    description:
      "Des interfaces simples, modernes et intuitives pour une meilleure expérience.",
    tags: ["Figma", "Design System", "Prototypage"],
    illustration: <IllustrationDesign />,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 11l6.586-6.586a2 2 0 112.828 2.828L11.828 13.83H9V11z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19h14" />
      </svg>
    ),
  },
  {
    title: "Hébergement & DevOps",
    description:
      "Déploiement, intégration continue et hébergement sécurisé de vos applications.",
    tags: ["Docker", "CI/CD", "VPS"],
    illustration: <IllustrationHosting />,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h10a4 4 0 000-8 5 5 0 00-9.6-1.5A4 4 0 003 15z" />
      </svg>
    ),
  },
  {
    title: "Architecture & Conception",
    description:
      "Analyse des besoins, conception technique, modélisation UML et planification Agile.",
    tags: ["UML", "Analyse", "Agile / Scrum"],
    illustration: <IllustrationArchitecture />,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${index * 100}ms` : "0ms" }}
      className={`group relative rounded-2xl bg-white/70 border border-foreground/10 shadow-sm hover:shadow-xl transition-all duration-700 ease-out hover:-translate-y-1.5 overflow-hidden ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Illustration */}
      <div className="relative w-full aspect-[16/7] bg-accent/[0.06] transition-transform duration-500 group-hover:scale-[1.03]">
        {service.illustration}
      </div>

      <div className="p-4 sm:p-5 pt-3.5">
        {/* Icône + Titre */}
        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-9 h-9 shrink-0 rounded-lg bg-accent/15 text-accent flex items-center justify-center transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:rotate-6">
            {service.icon}
          </div>
          <h3 className="text-base sm:text-lg font-bold text-foreground">
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed mb-3.5">
          {service.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-accent/10 text-foreground/80 border border-accent/20 transition-colors duration-300 group-hover:bg-accent/20 group-hover:border-accent/40"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 lg:py-28">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest text-accent mb-4 uppercase">
            Nos Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
            Ce que je peux faire pour vous
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
            Un accompagnement complet, de la conception à la mise en ligne de vos projets numériques.
          </p>
        </div>

        {/* Grille 2x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 max-w-3xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
