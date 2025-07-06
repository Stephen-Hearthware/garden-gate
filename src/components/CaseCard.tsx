import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

interface CaseCardProps {
  memberName: string;
  incident: string;
  date: string;
  severity: string;
  nudges: string[];
}

export function CaseCard({ memberName, incident, date, severity, nudges }: CaseCardProps) {
  const severityIcon =
    severity === "low" ? "🌱" : severity === "medium" ? "🧹" : "⚠️";

  const friendly = (n: string) => {
    if (n.toLowerCase() === "remind guidelines") return "Gently revisit rules";
    return n;
  };

  return (
    <Card className="bg-white/70 backdrop-blur-sm shadow-[0_2px_8px_rgba(0,0,0,0.05)] hover:scale-[1.01] transition-transform text-foreground">
      <CardHeader className="flex items-start gap-3">
        <span className="text-2xl" aria-hidden="true">
          {severityIcon}
        </span>
        <div>
          <CardTitle className="font-display text-xl">{memberName}</CardTitle>
          <CardDescription className="text-sm">
            {new Date(date).toLocaleDateString()}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <p>{incident}</p>
        <div className="flex flex-wrap gap-2">
          {nudges.map((nudge, idx) => (
            <span
              key={idx}
              className="bg-softGreen text-olive/90 px-2 py-1 rounded-full text-xs"
            >
              {friendly(nudge)}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
