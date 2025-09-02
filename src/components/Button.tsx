import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type: "submit" | "reset" | "button";
};

export function Button({ children, onClick, type }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="border-2 border-gray-600 w-30 py-1 rounded-sm"
    >
      {children}
    </button>
  );
}
