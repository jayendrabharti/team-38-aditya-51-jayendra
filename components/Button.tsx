import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:from-indigo-600 hover:to-purple-700 hover:shadow-indigo-500/40 active:scale-[0.97]",
  secondary:
    "bg-zinc-800 text-zinc-100 hover:bg-zinc-700 active:scale-[0.97] dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-zinc-300",
  outline:
    "border border-zinc-300 text-zinc-700 bg-transparent hover:bg-zinc-100 active:scale-[0.97] dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
  ghost:
    "text-zinc-600 bg-transparent hover:bg-zinc-100 active:scale-[0.97] dark:text-zinc-400 dark:hover:bg-zinc-800",
  danger:
    "bg-gradient-to-r from-red-500 to-rose-600 text-white shadow-lg shadow-red-500/25 hover:from-red-600 hover:to-rose-700 hover:shadow-red-500/40 active:scale-[0.97]",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-8 px-3 text-xs gap-1.5 rounded-md",
  md: "h-10 px-5 text-sm gap-2 rounded-lg",
  lg: "h-12 px-7 text-base gap-2.5 rounded-xl",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={[
        "inline-flex items-center justify-center font-medium transition-all duration-200 ease-out cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500",
        variantStyles[variant],
        sizeStyles[size],
        fullWidth ? "w-full" : "",
        disabled
          ? "pointer-events-none opacity-50 saturate-0 shadow-none"
          : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
