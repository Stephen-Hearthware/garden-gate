import { CaseCard } from "@/components/CaseCard";
import { cases } from "@/data/mockCases";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "radial-gradient(circle at top, #D4EAC8 0%, #F9F9F6 80%)",
      }}
    >
      <header className="text-center space-y-4 py-10">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto text-softGreen"
        >
          <path
            d="M12 22s8-4 8-12V5.5c0-.83-.67-1.5-1.5-1.5h-1C15 4 12 6 12 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 22S4 18 4 10V5.5C4 4.67 4.67 4 5.5 4h1C9 4 12 6 12 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h1 className="text-5xl">Garden Gate</h1>
        <p className="text-lg text-muted-foreground">
          Where we tend to our garden — and our neighbors — with care.
        </p>
      </header>
      <div className="bg-lime-50 rounded-xl p-4 mb-8 text-center">
        🌿 Today’s notes: Sun is shining, plots are growing fast. Let’s review
        concerns with patience and care.
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {cases.map((c) => (
          <CaseCard key={c.id} {...c} />
        ))}
      </div>
    </div>
  );
}
