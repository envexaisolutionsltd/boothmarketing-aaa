import { PrimaryLink } from "@/components/ui/primary-link";

export default function NotFound() {
  return <section className="mx-auto flex min-h-[65vh] max-w-3xl flex-col items-center justify-center px-5 py-20 text-center"><p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d9cdb9]">404</p><h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-zinc-100 sm:text-5xl">This page could not be found.</h1><p className="mt-5 text-zinc-500">Return to Booth Marketing and continue from there.</p><PrimaryLink href="/" className="mt-8">Return Home</PrimaryLink></section>;
}
