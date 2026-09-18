import Image from "next/image";

const technologies = [
  "Flutter",
  "Next.js",
  "Laravel",
  "Node.js",
  "Database",
];

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative w-full min-h-[85vh] lg:min-h-screen flex items-center justify-between overflow-hidden bg-background pt-16 pb-6 lg:pt-20 lg:pb-0"
    >
      {/* 1. Background Image (Hero Background - débute sous la navbar) */}
      <div className="absolute top-16 inset-x-0 bottom-0 z-0"
        style={{
          maskImage: "linear-gradient(to left, black 80%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to left, black 80%, transparent 100%)",
        }}
      >
        <Image
          src="/images/hero-bg.png"
          alt="Arrière-plan graphique Hero"
          fill
          priority
          className="object-cover object-top w-full h-full pointer-events-none opacity-95"
          sizes="100vw"
        />
      </div>

      {/* 1bis. Photo intégrée au background, à droite, en fondu vers la gauche */}
      <div
        className="absolute right-40 bottom-0 top-16 w-[30%] sm:w-[30%] lg:w-[32%] xl:w-[40%] z-[1] pointer-events-none"
      >
        <Image
          src="/images/tsiry.png"
          alt=""
          fill
          priority
          aria-hidden="true"
          className="object-contain object-right-bottom "
          sizes="(max-width: 1024px) 50vw, 30vw"
        />
      </div>

      {/* Overlay sombre pour garder le côté gauche lisible et contrasté */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-background via-background/80 to-background/20 lg:from-background lg:via-background/55 lg:to-transparent pointer-events-none" />

      {/* 2. Contenu Texte & Photo */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6 lg:gap-10 pt-4 pb-4 lg:pt-8 lg:pb-0">
        {/* Partie Gauche : Texte */}
        <div className="w-full lg:w-6/12 xl:w-6/12 flex flex-col justify-center space-y-3.5 sm:space-y-4 text-left z-20 lg:pb-12">
          {/* Subtitle / Greeting */}
          <div>
            <span className="inline-block px-3.5 py-1 rounded-full bg-accent/15 text-accent text-xs sm:text-sm font-semibold tracking-wider uppercase border border-accent/20">
              BONJOUR, JE SUIS
            </span>
          </div>

          {/* Titre NARINDRA */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground tracking-tight leading-none uppercase">
            NARINDRA
          </h1>

          {/* Spécialité / Métier (Sur une seule ligne) */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-accent leading-snug whitespace-nowrap">
            Développeur Web &amp; Mobile
          </h2>

          {/* Petite description professionnelle */}
          <p className="text-base sm:text-lg text-foreground/85 max-w-xl leading-relaxed font-normal">
            Je conçois des solutions numériques modernes, simples, utiles et accessibles.
          </p>

          {/* Boutons d'action (Voir mes projets + Contact) */}
          <div className="pt-1 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#projet"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 rounded-full bg-foreground text-background font-semibold text-sm sm:text-base shadow-md hover:bg-accent hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 group"
            >
              <span>Voir mes projets</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-white/80 hover:bg-white text-foreground font-semibold text-sm sm:text-base border border-foreground/20 shadow-2xs hover:border-accent hover:text-accent transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Contact</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}



