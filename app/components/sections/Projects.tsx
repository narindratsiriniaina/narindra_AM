"use client";

import { useState } from "react";
import Image from "next/image";
import { projectsData, Project } from "@/app/lib/projectsData";
import { texts } from "@/app/lib/texts";
import ProjectDrawer from "@/app/components/ui/ProjectDrawer";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const p = texts.projects;

  const handleOpenDrawer = (project: Project) => {
    setSelectedProject(project);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleDiscussProject = (project: Project) => {
    setIsDrawerOpen(false);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        const messageTextarea = document.getElementById(
          "contact-message"
        ) as HTMLTextAreaElement | null;
        if (messageTextarea) {
          messageTextarea.value = p.projectMessage(project.title);
          messageTextarea.focus();
        }
      }, 400);
    }
  };

  const marqueeProjects = [...projectsData, ...projectsData];

  return (
    <section id="projet" className="py-20 px-4 bg-background/50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <span className="inline-block text-xs font-semibold tracking-widest text-accent mb-3 uppercase">
          {p.title}
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          {p.heading}
        </h2>
        <p className="text-foreground/75 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {p.description}
        </p>
      </div>

      <div className="relative w-full overflow-hidden py-4">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee-reverse gap-6 w-max">
          {marqueeProjects.map((project, index) => (
            <article
              key={`${project.id}-${index}`}
              className="w-[280px] sm:w-[310px] md:w-[340px] lg:w-[360px] bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-foreground/10 flex flex-col justify-between group shrink-0 transform hover:-translate-y-1"
            >
              <div>
                <div
                  onClick={() => handleOpenDrawer(project)}
                  className="w-full h-44 sm:h-48 relative rounded-xl mb-4 overflow-hidden bg-accent/5 border border-foreground/5 cursor-pointer group-hover:opacity-95 transition-opacity"
                >
                  <Image
                    src={project.primaryImage}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 280px, (max-width: 1024px) 310px, 360px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                      <span className="text-white text-xs font-semibold flex items-center gap-1.5 bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm">
                      <svg
                        className="w-3.5 h-3.5 text-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      {p.preview}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[11px] font-bold text-accent uppercase tracking-wider bg-accent/10 px-2.5 py-0.5 rounded-full">
                    {project.category}
                  </span>
                  {project.period && (
                    <span className="text-[11px] text-foreground/50 font-medium">
                      {project.period}
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-lg text-foreground mb-1.5 line-clamp-1 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-foreground/70 text-xs sm:text-sm mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-0.5 bg-foreground/5 text-foreground/80 rounded-md font-medium border border-foreground/5"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="text-[11px] px-2 py-0.5 text-accent font-semibold">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-3 border-t border-foreground/10 flex items-center justify-between">
                <span className="text-xs text-foreground/60 font-medium truncate max-w-[140px]">
                  {project.subtitle}
                </span>

                <button
                  type="button"
                  onClick={() => handleOpenDrawer(project)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-foreground/5 hover:bg-accent text-foreground hover:text-white text-xs font-semibold transition-all duration-200"
                >
                  <span>{p.seeDetail}</span>
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ProjectDrawer
        project={selectedProject}
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        onDiscussProject={handleDiscussProject}
      />
    </section>
  );
}
