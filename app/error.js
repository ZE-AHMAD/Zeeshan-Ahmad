"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#040a06] px-4 text-center">
      <h1 className="text-6xl font-bold text-white">500</h1>
      <p className="mt-4 text-lg text-zinc-400">
        Something went wrong on our end.
      </p>
      <div className="mt-8 flex gap-4">
        <button
          onClick={reset}
          className="rounded-xl bg-[#4E8F63] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5BA46F]"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="rounded-xl border border-white/10 px-6 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:bg-white/10"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
