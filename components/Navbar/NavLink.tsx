"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export default function NavLink({ href, label, icon }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
 className={`inline-flex flex-shrink-0 items-center justify-center gap-2 w-20 h-8 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap
${
  isActive
    ? "bg-primary text-white"
    : "text-secondary hover:bg-primary hover:text-white"
}`}
    >
      <span className="w-4 h-4 flex items-center justify-center">
        {icon}
      </span>
      <span>{label}</span>
    </Link>
  );
}