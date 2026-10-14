"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { texts } from "@/app/lib/texts";

const navLinks = [
  { href: "#accueil", label: texts.nav.home },
  { href: "#apropos", label: texts.nav.about },
  { href: "#formation", label: texts.nav.training },
  { href: "#projet", label: texts.nav.projects },
  { href: "#contact", label: texts.nav.contact },
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
      className={`site-header fixed inset-x-0 top-5 z-50 transition-all duration-300 ${
        isScrolled
          ? "shadow-lg"
          : ""
      }`}
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="mx-auto max-w-[1474px] px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-[70px] items-center justify-between gap-6 rounded-full border border-foreground/10 bg-white/95 px-4 shadow-[0_14px_35px_rgba(46,31,20,0.08)] backdrop-blur-md sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="#accueil"
            className="group z-10 flex shrink-0 items-center gap-2.5"
            aria-label={texts.nav.backToHome}
          >
            <Image
              src="/images/logo.png"
              alt="AM Software Development"
              width={48}
              height={48}
              className="h-11 w-11 rounded-full object-cover transition-transform group-hover:scale-105"
              priority
            />
            <span className="hidden text-2xl font-semibold tracking-tight text-foreground sm:block">
              {texts.nav.logo}
            </span>
          </Link>

          {/* Desktop Navigation Links (Centrés) */}
          <ul className="absolute left-1/2 z-10 hidden -translate-x-1/2 items-center gap-7 md:flex lg:gap-9">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative whitespace-nowrap text-[15px] font-medium text-foreground transition-colors duration-200 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:text-accent hover:after:w-full focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Actions Droite: Langue (FR/EN) + Bouton CV */}
          <div className="z-10 hidden items-center gap-3 md:flex">
            {/* Toggle Langue */}
          
           

            {/* Bouton CV */}
            <a
              href="/cv/Modele CV tsiry 2.0.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <svg
                className="h-4 w-4"
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
              <span>Télécharger</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="z-10 rounded-lg p-2 transition-colors hover:bg-accent/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
            aria-label={isOpen ? texts.nav.closeMenu : texts.nav.openMenu}
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
        <ul className="space-y-2 border-t border-foreground/10 bg-background/95 px-5 pb-4 pt-3 backdrop-blur-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-4 py-2.5 text-foreground transition-colors duration-200 hover:bg-accent/10 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
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
