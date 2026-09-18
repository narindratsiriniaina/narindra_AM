type Props = {
  label: string;
  type?: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  label,
  type = "text",
  placeholder,
  error,
  disabled = false,
  value,
  onChange,
}: Props) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-sm font-medium text-texte">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
        className={`h-11 px-3 rounded-btn border bg-blanc text-texte placeholder:text-texte-clair
          transition-colors duration-200 focus:outline-none focus:ring-2
          ${
            error
              ? "border-erreur focus:ring-erreur"
              : "border-bordure focus:border-accent focus:ring-accent"
          }
          ${disabled ? "bg-desactive cursor-not-allowed" : ""}
        `}
      />
      {error && <span className="text-sm text-erreur">{error}</span>}
    </div>
  );
}