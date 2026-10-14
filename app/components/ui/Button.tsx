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
    "h-11 px-6 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2";

  const styles = {
    primary: disabled
      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
      : "bg-accent text-white hover:bg-accent/90 active:bg-accent",
    secondary: disabled
      ? "border border-gray-300 text-gray-400 cursor-not-allowed"
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