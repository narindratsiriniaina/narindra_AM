"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Project } from "@/app/lib/projectsData";
import { texts } from "@/app/lib/texts";

interface ProjectDrawerProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onDiscussProject?: (project: Project) => void;
}

export default function ProjectDrawer({
  project,
  isOpen,
  onClose,
  onDiscussProject,
}: ProjectDrawerProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const p = texts.projects;

  // Esc key & body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Reset selected image when project changes
  useEffect(() => {
    setSelectedImageIndex(0);
  }, [project]);

  if (!isOpen || !project) return null;

  const handleDiscussClick = () => {
    if (onDiscussProject) {
      onDiscussProject(project);
    } else {
      onClose();
      const contactElem = document.getElementById("contact");
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <aside
          className="w-screen max-w-2xl bg-background shadow-2xl flex flex-col border-l border-foreground/10 animate-drawer-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="drawer-title"
        >
          <div className="px-6 py-5 border-b border-foreground/10 flex items-center justify-between bg-white/60 backdrop-blur-md sticky top-0 z-10">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
              <div>
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                  {project.category}
                </span>
                <h2
                  id="drawer-title"
                  className="text-xl sm:text-2xl font-bold text-foreground leading-snug"
                >
                  {project.title}
                </h2>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-foreground/60 hover:text-foreground hover:bg-foreground/10 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Fermer le panneau"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <div className="space-y-3">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-foreground/5 border border-foreground/10 shadow-inner group">
                <Image
                  src={project.images[selectedImageIndex] || project.primaryImage}
                  alt={`${project.title} - Aperçu ${selectedImageIndex + 1}`}
                  fill
                  className="object-contain bg-black/5"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {project.images.length > 1 && (
                <div className="flex items-center gap-2.5 overflow-x-auto pb-1 pt-1 scrollbar-thin">
                  {project.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                        selectedImageIndex === idx
                          ? "border-accent scale-105 shadow-md"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image src={img} alt={`Vignette ${idx + 1}`} fill className="object-cover" sizes="80px" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-white/70 border border-foreground/10 text-sm">
              <div>
                <span className="block text-xs font-semibold text-foreground/50 uppercase tracking-wide">{p.role}</span>
                <span className="font-medium text-foreground">{project.role}</span>
              </div>
              {project.period && (
                <div>
                  <span className="block text-xs font-semibold text-foreground/50 uppercase tracking-wide">{p.context}</span>
                  <span className="font-medium text-foreground">{project.period}</span>
                </div>
              )}
            </div>

            <div>
              <h3 className="text-base font-bold text-foreground mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {p.presentation}
              </h3>
              <p className="text-foreground/80 leading-relaxed text-sm sm:text-base font-normal">
                {project.fullDescription || project.description}
              </p>
            </div>

            {project.features && project.features.length > 0 && (
              <div>
                <h3 className="text-base font-bold text-foreground mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {p.features}
                </h3>
                <ul className="space-y-2">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-4 border-t border-foreground/10">
              <h3 className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">
                {p.technologies}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/15 text-accent border border-accent/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-5 border-t border-foreground/10 bg-white/80 backdrop-blur-md sticky bottom-0">
            <button
              onClick={handleDiscussClick}
              className="w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-accent text-white font-semibold text-sm sm:text-base shadow-lg hover:bg-accent/90 transition-all transform hover:scale-[1.01] active:scale-[0.99] group"
            >
              <svg className="w-5 h-5 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>{p.discussProject}</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
