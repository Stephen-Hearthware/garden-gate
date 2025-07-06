import { CaseCard } from "@/components/CaseCard";
import { cases } from "@/data/mockCases";

export default function CasesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-serif">Open Cases</h1>
        <div className="flex gap-2 text-sm text-zinc-400">
          <button disabled className="cursor-not-allowed">Search</button>
          <span>|</span>
          <button disabled className="cursor-not-allowed">Filter</button>
          <span>|</span>
          <button disabled className="cursor-not-allowed">Sort</button>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {cases.map((c) => (
          <CaseCard key={c.id} {...c} />
        ))}
      </div>
    </div>
  );
}
