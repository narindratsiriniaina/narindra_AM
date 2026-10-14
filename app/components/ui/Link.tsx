type Props = {
  href: string;
  children: React.ReactNode;
  active?: boolean;
};

export default function Link({ href, children, active = false }: Props) {
  return (
    <a
      href={href}
      className={`inline-flex items-center h-11 px-2 transition-colors
        ${active ? "text-accent underline" : "text-foreground hover:text-accent"}
      `}
    >
      {children}
    </a>
  );
}