import Image from "next/image";
import { texts } from "@/app/lib/texts";

interface PersonalInfo {
  readonly label: string;
  readonly value: string;
}

export default function About() {
  const a = texts.about;
  const personalInfo: readonly PersonalInfo[] = a.personalInfo;

  return (
    <section id="apropos" className="py-20 px-4 lg:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/images/tsiry.png"
                alt={a.imageAlt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <span className="inline-block text-xs font-semibold tracking-widest text-accent mb-3 uppercase">
              {a.title}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {a.heading}
            </h2>

            <blockquote className="p-4 mb-6 italic text-foreground/80 bg-accent/10 border-l-4 border-accent rounded-r-xl text-sm sm:text-base">
              {a.quote}
            </blockquote>


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 py-6 border-t border-b border-foreground/10">
              {personalInfo.map((info, index) => (
                <div key={index} className="space-y-1">
                  <p className="text-xs font-semibold text-foreground/50 uppercase tracking-wide">
                    {info.label}
                  </p>
                  <p className="text-sm sm:text-base text-foreground font-medium">
                    {info.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
