const projects = [
  {
    title: "E-commerce Platform",
    description: "Plateforme de vente en ligne avec panier et paiement intégré.",
    tags: ["Next.js", "Stripe", "Tailwind"],
  },
  {
    title: "Dashboard Analytics",
    description: "Tableau de bord interactif pour visualiser des données.",
    tags: ["React", "D3.js", "TypeScript"],
  },
  {
    title: "Site Vitrine",
    description: "Site professionnel responsive pour un client local.",
    tags: ["Next.js", "CMS", "SEO"],
  },
];

export default function Projects() {
  return (
    <section id="projet" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          Projets
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="w-full h-40 bg-accent/10 rounded-xl mb-4 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-foreground/70 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
