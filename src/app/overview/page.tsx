import Link from "next/link";
import { cases } from "@/data/mockCases";

export default function OverviewPage() {
  const openItems = cases.length;
  return (
    <div className="text-center space-y-6 py-16 px-4">
      <div className="text-5xl">🌿</div>

      <h1 className="text-4xl font-serif text-zinc-800">Welcome back.</h1>

      <p className="text-base text-zinc-600 max-w-md mx-auto">
        Garden Gate helps community garden leaders address member conduct with
        care by reviewing reported incidents and providing grounded responses.
      </p>

      <p className="text-sm text-muted-foreground">
        You have <span className="font-medium">{openItems}</span> open items to
        review today.
      </p>

      <Link
        href="/cases"
        className="inline-block bg-softGreen text-olive px-4 py-2 rounded-md hover:bg-softGreen/80 text-sm font-medium"
      >
        View Cases
      </Link>
    </div>
  );
}
