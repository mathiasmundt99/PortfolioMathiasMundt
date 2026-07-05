import Link from "next/link";

export default function BackButton() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 text-zinc-400 transition hover:text-white"
    >
      ← Back to portfolio
    </Link>
  );
}
