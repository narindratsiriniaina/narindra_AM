import { texts } from "@/app/lib/texts";

interface SubItem {
  title: string;
  date: string;
  fileHref: string;
}

interface Entry {
  title: string;
  location: string;
  date: string;
  status?: "terminee" | "encours";
  description?: string;
  tags?: string[];
  fileHref?: string;
  fileLabel?: string;
  subItems?: SubItem[];
}

const formation: Entry[] = [
  {
    title: "Licence en Développement d'Application Intranet et Internet",
    location: "EMIT – Fianarantsoa",
    date: "2023 – 2026",
    status: "terminee",
    description:
      "Formation orientée vers le développement web, mobile, bases de données, analyse et conception d'applications.",
    fileHref: "/documents/licence-emit.pdf",
    fileLabel: texts.training.diploma,
  },
];

const certifications: Entry[] = [
  {
    title: "Formation Intensive en DevOps",
    location: "ODC Club – Fianarantsoa",
    date: "03 – 06 Mars 2026",
    description:
      "Apprentissage des concepts fondamentaux de l'intégration et du déploiement continus (CI/CD) pour l'automatisation de la mise en production.",
    tags: ["CI/CD", "Docker", "GitHub Actions", "Cloud/VPS"],
    fileHref: "/documents/certificat-devops.pdf",
    fileLabel: texts.training.certificate,
  },
  {
    title: "Certifications autodidactes",
    location: "OpenClassrooms",
    date: "",
    subItems: [
      {
        title: "Gérez votre code avec Git et GitHub",
        date: "2026",
        fileHref: "/documents/certificat-git-github.pdf",
      },
      {
        title: "Découvrez les algorithmes du développement informatique",
        date: "2024",
        fileHref: "/documents/certificat-algorithmes.pdf",
      },
    ],
  },
];

const ICON_SIZE = 18;
const ICON_SIZE_SM = 14;

function IconGraduation() {
  return (
    <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" focusable="false">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.42A12.083 12.083 0 0118 15.5c0 2.485-2.686 4.5-6 4.5s-6-2.015-6-4.5c0-1.02.24-1.96.66-2.74L12 14z" />
    </svg>
  );
}

function IconCertificate() {
  return (
    <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" focusable="false">
      <circle cx="12" cy="9" r="6" strokeWidth={2} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14.5L7.5 21l4.5-2.5 4.5 2.5-1.5-6.5" />
    </svg>
  );
}

function IconLaptop() {
  return (
    <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" focusable="false">
      <rect x="4" y="5" width="16" height="10" rx="1.5" strokeWidth={2} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 19h20" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg
      width={ICON_SIZE_SM}
      height={ICON_SIZE_SM}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      focusable="false"
      className="shrink-0"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
      <circle cx="12" cy="11" r="2.5" strokeWidth={2} />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg
      width={ICON_SIZE_SM}
      height={ICON_SIZE_SM}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      focusable="false"
      className="shrink-0"
    >
      <rect x="4" y="5" width="16" height="16" rx="2" strokeWidth={2} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 3v4M16 3v4M4 10h16" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg
      width={ICON_SIZE_SM}
      height={ICON_SIZE_SM}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      focusable="false"
      className="shrink-0"
    >
      <circle cx="12" cy="12" r="9" strokeWidth={2} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.5 12.5l2.5 2.5 4.5-5" />
    </svg>
  );
}

function IconExternalLink() {
  return (
    <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" focusable="false" className="shrink-0">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5h5v5M19 5l-8 8M8 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-2" />
    </svg>
  );
}

function StatusBadge({ status, date }: { status?: Entry["status"]; date: string }) {
  const t = texts.training;
  if (status === "terminee") {
    return (
      <span className="inline-flex flex-wrap items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-accent/15 text-accent">
        <IconCalendar />
        <time>{date}</time>
        <span className="inline-flex items-center gap-1 pl-1.5 border-l border-accent/30 text-foreground/70">
          <IconCheck />
          {t.statusCompleted}
        </span>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-accent/15 text-accent">
      <IconCalendar />
      <time>{date}</time>
    </span>
  );
}

function FileLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-accent hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded transition-colors duration-200"
    >
      {label}
      <IconExternalLink />
    </a>
  );
}

function EntryCard({ icon, entry }: { icon: React.ReactNode; entry: Entry }) {
  return (
    <article className="bg-white/80 rounded-xl border border-foreground/10 shadow-sm p-5 sm:p-6">
      <div className="flex gap-4">
        <div className="shrink-0 w-11 h-11 rounded-lg bg-accent/15 text-accent flex items-center justify-center">
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="font-bold text-foreground leading-snug">{entry.title}</h4>
          <p className="flex items-center gap-1.5 text-sm text-foreground/60 mt-1.5">
            <IconPin />
            <span>{entry.location}</span>
          </p>
          <div className="mt-3">
            <StatusBadge status={entry.status} date={entry.date} />
          </div>
          {entry.description && (
            <p className="text-sm text-foreground/70 leading-relaxed mt-3">
              {entry.description}
            </p>
          )}
          {entry.tags && (
            <ul className="flex flex-wrap gap-2 mt-3">
              {entry.tags.map((tag) => (
                <li
                  key={tag}
                  className="px-2.5 py-1 rounded-full text-xs font-medium bg-accent/10 text-foreground/80 border border-accent/20"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </article>
  );
}

function GroupEntryCard({ icon, entry }: { icon: React.ReactNode; entry: Entry }) {
  return (
    <article className="bg-white/80 rounded-xl border border-foreground/10 shadow-sm p-5 sm:p-6">
      <div className="flex gap-4">
        <div className="shrink-0 w-11 h-11 rounded-lg bg-accent/15 text-accent flex items-center justify-center">
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="font-bold text-foreground leading-snug">{entry.title}</h4>
          <p className="flex items-center gap-1.5 text-sm text-foreground/60 mt-1.5 mb-1">
            <IconPin />
            <span>{entry.location}</span>
          </p>

          <ul className="mt-3 divide-y divide-foreground/10">
            {entry.subItems!.map((sub) => (
              <li key={sub.title} className="py-3 first:pt-0 last:pb-0">
                <p className="text-sm font-medium text-foreground">{sub.title}</p>
                <div className="mt-1.5">
                  <StatusBadge date={sub.date} />
                </div>
            
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function Training() {
  const t = texts.training;

  return (
    <section id="formation" className="relative py-20 px-4 lg:py-28 overflow-hidden">
      <div
        aria-hidden="true"
        className="hidden md:grid grid-cols-4 gap-2 absolute top-10 right-10 opacity-70 pointer-events-none"
      >
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-accent" />
        ))}
      </div>
      <div
        aria-hidden="true"
        className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full border-[24px] border-accent/15 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full border-[16px] border-accent/20 pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span aria-hidden="true" className="w-8 h-0.5 bg-accent" />
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">
              {t.title}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
            {t.heading}
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 leading-relaxed max-w-2xl">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center shrink-0">
                <IconGraduation />
              </div>
              <h3 className="text-sm font-bold tracking-widest text-foreground uppercase">
                {t.formation}
              </h3>
              <span aria-hidden="true" className="flex-1 h-px bg-accent/30" />
            </div>

            <div className="space-y-5">
              {formation.map((entry) => (
                <EntryCard key={entry.title} icon={<IconGraduation />} entry={entry} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center shrink-0">
                <IconCertificate />
              </div>
              <h3 className="text-sm font-bold tracking-widest text-foreground uppercase">
                {t.certifications}
              </h3>
              <span aria-hidden="true" className="flex-1 h-px bg-accent/30" />
            </div>

            <div className="space-y-5">
              {certifications.map((entry) =>
                entry.subItems ? (
                  <GroupEntryCard key={entry.title} icon={<IconLaptop />} entry={entry} />
                ) : (
                  <EntryCard key={entry.title} icon={<IconCertificate />} entry={entry} />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
