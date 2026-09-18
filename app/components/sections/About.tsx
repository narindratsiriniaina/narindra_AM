import Image from 'next/image';
import Link from 'next/link';

interface PersonalInfo {
  label: string;
  value: string;
}

export default function About() {
  const personalInfo: PersonalInfo[] = [
    { label: 'Nom complet', value: 'Narindra' },
    { label: 'Email', value: 'narindra@example.com' },
    { label: 'Localisation', value: 'Madagascar' },
    { label: 'Disponibilité', value: 'Freelance' },
  ];

  return (
    <section id="apropos" className="py-20 px-4 lg:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Desktop: 2 colonnes | Mobile/Tablet: 1 colonne */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* COLONNE GAUCHE: PHOTO */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-sm aspect-square">
              <Image
                src="/images/narindra.png"
                alt="Narindra - Développeur web"
                fill
                className="object-cover rounded-xl"
                priority
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
          </div>

          {/* COLONNE DROITE: CONTENU */}
          <div className="order-1 lg:order-2">
            {/* Label */}
            <span className="inline-block text-xs font-semibold tracking-widest text-accent mb-4 uppercase">
              À propos
            </span>

            {/* Titre */}
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              À propos de moi
            </h2>

            {/* Description */}
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              Passionné par la technologie, je conçois des solutions numériques simples, utiles et accessibles. Mon objectif est de créer des expériences digitales qui facilitent la vie des utilisateurs et apportent une vraie valeur.
            </p>

            {/* Infos Personnelles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 py-8 border-t border-b border-foreground/10">
              {personalInfo.map((info, index) => (
                <div key={index}>
                  <p className="text-sm font-semibold text-foreground/60 uppercase tracking-wide mb-2">
                    {info.label}
                  </p>
                  <p className="text-base text-foreground font-medium">
                    {info.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Bouton CV */}
            <Link href="#contact">
              <button className="inline-block px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105">
                Télécharger CV
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
