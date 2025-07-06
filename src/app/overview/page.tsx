import Link from "next/link";
import { cases } from "@/data/mockCases";

export default function OverviewPage() {
  const openItems = cases.length;
  const highSeverity = cases.filter((c) => c.severity === "high").length;
  const today = new Date().toLocaleDateString();

  return (
    <div className="space-y-8 py-16 text-center">
      <div className="text-6xl">🌿</div>
      <h1 className="text-3xl font-serif">Welcome back.</h1>
      <div className="mx-auto max-w-xs space-y-1 rounded-xl border bg-zinc-50 p-4 text-sm text-zinc-600">
        <div className="font-medium">🌿 Garden Summary</div>
        <p>Open cases: {openItems}</p>
        <p>High severity: {highSeverity}</p>
        <p>Updated: {today}</p>
      </div>
      <Link
        href="/cases"
        className="inline-block rounded-md bg-darkGarden px-4 py-2 text-white hover:bg-darkGarden/90"
      >
        View Cases
      </Link>
    </div>
  );
}
