type Props = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({
  children,
  variant = "primary",
  disabled = false,
  onClick,
}: Props) {
  const base =
    "h-11 px-6 rounded-btn font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2";

  const styles = {
    primary: disabled
      ? "bg-desactive text-texte-clair cursor-not-allowed"
      : "bg-accent text-white hover:bg-accent-fonce active:bg-accent-fonce",
    secondary: disabled
      ? "border border-bordure text-texte-clair cursor-not-allowed"
      : "border border-accent text-accent hover:bg-accent hover:text-white",
  };

  return (
    <button
      className={`${base} ${styles[variant]}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}