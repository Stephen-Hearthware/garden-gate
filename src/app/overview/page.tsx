import Link from "next/link";
import { cases } from "@/data/mockCases";

export default function OverviewPage() {
  const openItems = cases.length;
  return (
    <div className="text-center space-y-8 py-16">
      <div className="text-6xl">🌿</div>
      <h1 className="text-3xl font-serif">Welcome back.</h1>
      <p className="text-lg text-muted-foreground">
        You have {openItems} open items to review today.
      </p>
      <Link
        href="/cases"
        className="inline-block bg-softGreen text-olive px-4 py-2 rounded-md hover:bg-softGreen/80"
      >
        View Cases
      </Link>
    </div>
  );
}
