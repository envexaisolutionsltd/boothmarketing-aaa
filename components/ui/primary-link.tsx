import Link from "next/link";
import { ArrowIcon } from "@/components/ui/arrow-icon";

type PrimaryLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function PrimaryLink({ href, children, className = "" }: PrimaryLinkProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#f1e8d8] px-6 py-3.5 text-sm font-semibold text-[#14110e] shadow-[0_0_0_1px_rgba(255,255,255,0.2)_inset] transition duration-200 hover:bg-[#fff8eb] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#be2e3d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090b] active:translate-y-px ${className}`}
    >
      {children}
      <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </Link>
  );
}
