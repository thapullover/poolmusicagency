import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "muted";
  className?: string;
} & (
  | { href: string; onClick?: never }
  | { href?: never; onClick?: () => void }
);

const variantStyles = {
  primary: "bg-neo-accent text-neo-white hover:bg-neo-accent/90",
  secondary: "bg-neo-secondary text-neo-ink hover:bg-neo-secondary/90",
  muted: "bg-neo-muted text-neo-ink hover:bg-neo-muted/90",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex h-14 min-h-14 items-center justify-center border-4 border-neo-ink px-6 font-bold uppercase tracking-widest transition-all duration-100 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:-translate-y-0.5";
  const shadowStyle = { boxShadow: "4px 4px 0px 0px #000" };
  const hoverShadow = "hover:shadow-[6px_6px_0px_0px_#000]";
  const combined = `${baseStyles} ${variantStyles[variant]} ${hoverShadow} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combined} style={shadowStyle}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={combined} style={shadowStyle}>
      {children}
    </button>
  );
}
