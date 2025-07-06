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

export function CaseCard({
  memberName,
  incident,
  date,
  nudges,
}: CaseCardProps) {
  const friendly = (n: string) => {
    if (n.toLowerCase() === "remind guidelines") return "Gently revisit rules";
    return n;
  };

  return (
    <Card className="gap-0 border-l-4 border-lime-400 bg-white/70 backdrop-blur-sm shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">{memberName}</CardTitle>
        <CardDescription className="text-xs text-zinc-500">
          {new Date(date).toLocaleDateString()}
        </CardDescription>
      </CardHeader>
      <CardContent className="py-2">
        <p>{incident}</p>
      </CardContent>
      <CardFooter className="flex-col items-stretch">
        <div className="w-full rounded-md border bg-zinc-50 p-3">
          <p className="mb-1 text-xs font-medium">Suggested Actions</p>
          <ul className="list-disc space-y-1 pl-4">
            {nudges.map((nudge, idx) => (
              <li key={idx} className="text-xs">
                {friendly(nudge)}
              </li>
            ))}
          </ul>
        </div>
      </CardFooter>
    </Card>
  );
}
