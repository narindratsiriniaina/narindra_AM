export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-foreground/10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-foreground/60 text-sm">
          © {new Date().getFullYear()} Ankafa MT. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
