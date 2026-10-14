"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 850);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="site-loader" role="status" aria-label="Chargement du portfolio">
      <div className="site-loader__content">
        <Image
          src="/images/logo.png"
          alt="AM Software Development"
          width={112}
          height={112}
          className="site-loader__logo"
          priority
        />
        <span className="site-loader__name">Ankafa MT</span>
        <span className="site-loader__spinner" aria-hidden="true" />
      </div>
    </div>
  );
}
