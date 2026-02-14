export function Card({
  children,
  className = "",
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent" | "muted";
}) {
  const bgColors = {
    default: "bg-neo-white",
    accent: "bg-neo-accent text-neo-white",
    muted: "bg-neo-muted text-neo-ink",
  };

  return (
    <div
      className={`border-4 border-neo-ink transition-all duration-200 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#000] ${bgColors[variant]} ${className}`}
      style={{ boxShadow: "8px 8px 0px 0px #000" }}
    >
      {children}
    </div>
  );
}
