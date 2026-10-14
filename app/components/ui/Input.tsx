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
      <label className="block text-sm font-medium text-foreground">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
        className={`h-11 px-3 rounded-lg border bg-white text-foreground placeholder:text-gray-400
          transition-colors duration-200 focus:outline-none focus:ring-2
          ${
            error
              ? "border-red-400 focus:ring-red-400"
              : "border-foreground/15 focus:border-accent focus:ring-accent"
          }
          ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}
        `}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}