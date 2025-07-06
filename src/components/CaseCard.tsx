import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

interface CaseCardProps {
  memberName: string;
  incident: string;
  date: string;
  severity: string;
  nudges: string[];
}

export function CaseCard({ memberName, incident, date, severity, nudges }: CaseCardProps) {
  return (
    <Card className="bg-white text-foreground">
      <CardHeader>
        <CardTitle className="font-display text-xl">{memberName}</CardTitle>
        <CardDescription className="text-sm">{new Date(date).toLocaleDateString()}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <p>{incident}</p>
        <p className="text-sm text-muted-foreground">Severity: {severity}</p>
        <div className="flex flex-wrap gap-2">
          {nudges.map((nudge, idx) => (
            <span
              key={idx}
              className="bg-softGreen text-olive px-2 py-1 rounded-full text-xs"
            >
              {nudge}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
