import { CaseCard } from "@/components/CaseCard";
import { cases } from "@/data/mockCases";

export default function CasesPage() {
  return (
    <div className="space-y-6">
      <section className="bg-lime-50 rounded-xl p-4 text-center">
        🌿 Today’s notes: Sun is shining, plots are growing fast. Let’s review
        concerns with patience and care.
      </section>
      <section className="flex items-center justify-between">
        <h1 className="text-3xl font-serif">Open Cases</h1>
        <span className="text-sm text-muted-foreground">Filters coming soon</span>
      </section>
      <div className="grid gap-6 sm:grid-cols-2">
        {cases.map((c) => (
          <CaseCard key={c.id} {...c} />
        ))}
      </div>
    </div>
  );
}
