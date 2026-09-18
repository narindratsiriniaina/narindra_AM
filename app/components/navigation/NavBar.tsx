"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "À propos" },
  { href: "#formation", label: "Formation" },
  { href: "#projet", label: "Projet" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState<"FR" | "EN">("FR");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-md"
          : "bg-background border-b border-foreground/5"
      }`}
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo */}
          <Link
            href="#accueil"
            className="flex items-center gap-2 group z-10"
            aria-label="Retour à l'accueil"
          >
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold text-lg transition-transform group-hover:scale-105">
              A
            </div>
            <span className="text-xl font-semibold text-foreground hidden sm:block">
              Ankafa MT
            </span>
          </Link>

          {/* Desktop Navigation Links (Centrés) */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 md:absolute md:left-1/2 md:-translate-x-1/2 z-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-foreground hover:text-accent transition-colors duration-200 text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Actions Droite: Langue (FR/EN) + Bouton CV */}
          <div className="hidden md:flex items-center gap-3 z-10">
            {/* Toggle Langue */}
            <div className="flex items-center bg-foreground/5 p-1 rounded-full text-xs font-semibold border border-foreground/10">
              <button
                type="button"
                onClick={() => setLanguage("FR")}
                className={`px-2.5 py-0.5 rounded-full transition-all duration-200 ${
                  language === "FR"
                    ? "bg-accent text-white shadow-2xs"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                FR
              </button>
              <button
                type="button"
                onClick={() => setLanguage("EN")}
                className={`px-2.5 py-0.5 rounded-full transition-all duration-200 ${
                  language === "EN"
                    ? "bg-accent text-white shadow-2xs"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                EN
              </button>
            </div>

            {/* Bouton CV */}
            <a
              href="#cv"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent text-white text-xs font-semibold shadow-2xs hover:bg-accent/90 transition-all transform hover:scale-105"
            >
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
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>CV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent/10 transition-colors z-10"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-foreground transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-foreground transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-foreground transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <ul className="px-4 pb-4 space-y-2 bg-background/95 backdrop-blur-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 px-4 text-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
