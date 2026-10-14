export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  role: string;
  period?: string;
  description: string;
  fullDescription: string;
  features: string[];
  tags: string[];
  primaryImage: string;
  images: string[];
}

export const projectsData: Project[] = [
  {
    id: "campusmaps",
    title: "CampusMaps",
    category: "Application Mobile",
    subtitle: "Université de Fianarantsoa (EMIT)",
    role: "Développeur Mobile Principal (Flutter)",
    period: "Projet Académique EMIT",
    description:
      "Application mobile de cartographie interactive facilitant l'orientation des étudiants et visiteurs sur le campus universitaire EMIT.",
    fullDescription:
      "CampusMaps est une solution mobile complète de géolocalisation et de cartographie interactive développée pour l'Université de Fianarantsoa (EMIT). Elle permet aux étudiants, enseignants et visiteurs de rechercher facilement des salles de cours, des blocs administratifs et des points d'intérêt sur le campus, avec guidage visuel et assistant intelligent.",
    features: [
      "Cartographie interactive et géolocalisation sur le campus",
      "Recherche rapide des salles de cours et bâtiments",
      "Assistant virtuel d'orientation et de renseignement",
      "Interface utilisateur moderne et intuitive développée en Flutter",
      "Bases de données spatiales et backend Supabase"
    ],
    tags: ["Flutter", "Supabase", "Dart", "Geoloc", "Mobile"],
    primaryImage: "/images/CampusMaps/loginCampus.png",
    images: [
      "/images/CampusMaps/loginCampus.png",
      "/images/CampusMaps/Assistant.png",
      "/images/CampusMaps/RechercherCampus.png",
      "/images/CampusMaps/capture_decran_campus.png"
    ]
  },
  {
    id: "elearning",
    title: "Plateforme E-learning Étudiant",
    category: "Web & Backend",
    subtitle: "Gestion de suivi d'apprentissage",
    role: "Développeur Full-Stack Spring-Boot / ASP.NET",
    period: "Projet Académique EMIT",
    description:
      "Plateforme d'apprentissage en ligne permettant la gestion des inscriptions, des cours et du suivi pédagogique des étudiants.",
    fullDescription:
      "Plateforme web d'enseignement à distance conçue pour rationaliser l'accès aux cours, le suivi de la progression pédagogique et les évaluations. L'application intègre une gestion fine des droits d'accès (étudiants, enseignants, administration), un tableau de bord analytique et des outils de dépôt et correction de travaux.",
    features: [
      "Gestion complète des inscriptions et profils utilisateurs",
      "Diffusion de cours, supports de cours et devoirs",
      "Suivi personnalisé du parcours pédagogique de l'étudiant",
      "Architecture robuste développée avec Spring-Boot et ASP.NET",
      "Interface réactive avec gestion sécurisée des rôles"
    ],
    tags: ["Spring-Boot", "ASP.NET", "React", "MySQL", "E-learning"],
    primaryImage: "/images/plateforme/Plateforme.png",
    images: [
      "/images/plateforme/Plateforme.png",
      "/images/plateforme/Plateforme1_(2).png",
      "/images/plateforme/Plateforme2.png",
      "/images/plateforme/Capture_décran_2026-07-12_231808.png"
    ]
  },
  {
    id: "edunova",
    title: "Edunova – Gestion Scolaire",
    category: "Backend REST API",
    subtitle: "Plateforme Intégrée de Gestion Établissement",
    role: "Responsable Développeur Backend Laravel",
    period: "Avril 2026 – Juin 2026",
    description:
      "Système backend global de gestion scolaire : notes, emplois du temps, inscriptions et déploiement automatisé CI/CD.",
    fullDescription:
      "Edunova est une solution backend robuste axée sur la gestion automatisée des établissements scolaires. Elle englobe la modélisation complexe des bases de données relationnelles, la création d'API REST sécurisées pour la gestion des notes et inscriptions, ainsi que la mise en place de tests automatisés et de déploiement continu.",
    features: [
      "Conception et modélisation avancée de la base de données relationnelle",
      "Création et sécurisation complète d'API REST (Auth, Inscriptions, Notes)",
      "Gestion automatisée des emplois du temps et de l'inventaire matériel",
      "CI/CD automatisé et déploiement continu via GitHub Actions sur serveur VPS",
      "Conteneurisation des services pour environnement de production"
    ],
    tags: ["Laravel", "REST API", "PostgreSQL", "Docker", "GitHub Actions", "CI/CD"],
    primaryImage: "/images/EDUNOVA/Edunova.png",
    images: [
      "/images/EDUNOVA/Edunova.png",
      "/images/EDUNOVA/etudiant.png",
      "/images/EDUNOVA/note.png",
      "/images/EDUNOVA/emploi du temps.png",
      "/images/EDUNOVA/Inventaire.png"
    ]
  },
  {
    id: "dst",
    title: "DST – Inventaire & Suivi Matériel",
    category: "Application Web Full-Stack",
    subtitle: "Direction des Systèmes d'Information et Télécommunications",
    role: "Stagiaire Développeur full-stack JS",
    period: "Juin 2025 – Septembre 2025",
    description:
      "Application web de gestion du suivi et d'inventaire du matériel informatique au sein de la DST Anosy, Antananarivo.",
    fullDescription:
      "Développée durant mon stage au sein de la DST Anosy à Antananarivo, cette application web centralise l'inventaire complet des équipements informatiques et assure le suivi rigoureux des affectations, de la maintenance et du cycle de vie des matériels.",
    features: [
      "Gestion centralisée de l'inventaire matériel (PC, imprimantes, réseaux)",
      "Suivi dynamique des affectations par département et agent",
      "Tableau de bord de contrôle et rapports d'état du parc informatique",
      "Développement Full-Stack JavaScript moderne et réactif"
    ],
    tags: ["Node.js", "Express", "JavaScript", "MySQL", "Gestion Parc"],
    primaryImage: "/images/DST/dashboard.png",
    images: [
      "/images/DST/dashboard.png",
      "/images/DST/affectation.png",
      "/images/DST/Expo.png"
    ]
  },
  {
    id: "sampati",
    title: "SAMPATI – Gestion Scout",
    category: "Application Web & Backend",
    subtitle: "Gestion des activités et adhésions",
    role: "Responsable Développeur Backend Laravel",
    period: "Depuis Juin 2026",
    description:
      "Module web et API backend pour la gestion des activités, des événements et des adhésions d'un mouvement scout.",
    fullDescription:
      "SAMPATI est une application dédiée à l'administration d'une organisation scout. Elle permet le recensement des membres, le suivi des cotisations et adhésions, ainsi que l'organisation et la planification des camps et activités scoutes.",
    features: [
      "Module complet de gestion des adhésions et fiches des membres",
      "Planification et suivi des activités, rassemblements et projets scouts",
      "API REST performante développée avec Laravel",
      "Connexion sécurisée et requêtes optimisées sur base PostgreSQL"
    ],
    tags: ["Laravel", "PostgreSQL", "REST API", "Tailwind CSS"],
    primaryImage: "/images/Sampati/Capture d'écran 2026-09-19 232338.png",
    images: [
      "/images/Sampati/Capture d'écran 2026-09-19 232338.png"
    ]
  },
  {
    id: "edt",
    title: "EDT – Générateur d'Emplois du Temps",
    category: "App Web & Algorithmique",
    subtitle: "Planification et gestion des créneaux",
    role: "Développeur Frontend ",
    period: "Projet EMIT",
    description:
      "Outil d'optimisation et de génération d'emplois du temps par créneaux horaires avec résolution des conflits d'affectation.",
    fullDescription:
      "Solution informatique permettant d'organiser et de générer automatiquement des créneaux d'emploi du temps sans chevauchement pour les promotions universitaires, salles et enseignants.",
    features: [
      "Algorithme d'affectation et de gestion des créneaux horaires",
      "Détection et alerte en cas de conflit de salle ou d'enseignant",
      "Interface de visualisation et export d'emplois du temps"
    ],
    tags: ["Aspnet", "Algorithmique", "UI/UX"],
    primaryImage: "/images/EDT/creneau.png",
    images: [
      "/images/EDT/creneau.png",
      "/images/EDT/generer.png"
    ]
  }
];
