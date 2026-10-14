import { texts } from "@/app/lib/texts";

export default function Footer() {
  const f = texts.footer;
  const contact = texts.contact;

  return (
    <footer className="py-10 px-4 border-t border-foreground/10 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <p className="font-bold text-foreground text-base">
            {f.name}
          </p>
          <p className="text-foreground/60 text-xs mt-0.5">
            {f.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs text-foreground/70">
          <a
            href="https://github.com/Narindratsiry-218I24"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/narindra-tsiriniaina-698b90303"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="/cv/Modele CV tsiry 2.0.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors font-semibold text-accent"
          >
            {contact.downloadCV}
          </a>
        </div>

        <p className="text-foreground/50 text-xs">
          © {new Date().getFullYear()} {f.name.split(' ').pop()}. {f.rights}.
        </p>
      </div>
    </footer>
  );
}
