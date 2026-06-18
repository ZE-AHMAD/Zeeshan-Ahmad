import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#040a06] px-4 text-center">
      <h1 className="text-6xl font-bold text-white">404</h1>
      <p className="mt-4 text-lg text-zinc-400">
        This page doesn&apos;t exist yet.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#4E8F63] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5BA46F]"
      >
        Back Home
      </Link>
    </div>
  );
}
