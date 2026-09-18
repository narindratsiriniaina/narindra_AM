type Props = {
  children: React.ReactNode;
  hover?: boolean;
};

export default function Card({ children, hover = false }: Props) {
  return (
    <div
      className={`bg-blanc border border-bordure rounded-card p-6
        shadow-sm transition-shadow duration-200
        ${hover ? "hover:shadow-md cursor-pointer" : ""}
      `}
    >
      {children}
    </div>
  );
}