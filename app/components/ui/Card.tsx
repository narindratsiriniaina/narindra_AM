type Props = {
  children: React.ReactNode;
  hover?: boolean;
};

export default function Card({ children, hover = false }: Props) {
  return (
    <div
      className={`bg-white border border-foreground/10 rounded-xl p-6
        shadow-sm transition-shadow duration-200
        ${hover ? "hover:shadow-md cursor-pointer" : ""}
      `}
    >
      {children}
    </div>
  );
}