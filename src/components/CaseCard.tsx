import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter as DialogFooterRoot,
  DialogClose,
} from "@/components/ui/dialog";

interface CaseCardProps {
  memberName: string;
  incident: string;
  date: string;
  severity: "low" | "medium" | "high";
  repeatOffense: boolean;
  nudge: string | null;
}

export function CaseCard({
  memberName,
  incident,
  severity,
  repeatOffense,
  nudge,
}: CaseCardProps) {
  const truncated =
    incident.length > 80 ? `${incident.slice(0, 80)}…` : incident;

  const severityStyles: Record<CaseCardProps["severity"], string> = {
    low: "bg-lime-100 text-lime-800",
    medium: "bg-yellow-100 text-yellow-800",
    high: "bg-red-100 text-red-800",
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">
                {memberName}
              </CardTitle>
              <span
                className={`text-xs px-2 py-0.5 rounded ${severityStyles[severity]}`}
              >
                {severity}
              </span>
            </div>
          </CardHeader>
          <CardContent className="pt-0 pb-2">
            <p className="text-sm line-clamp-2">{truncated}</p>
          </CardContent>
          {nudge && (
            <CardFooter className="pt-2">
              <div className="w-full rounded bg-zinc-100 px-2 py-1 text-xs text-zinc-600">
                Suggested Action: {nudge}
              </div>
            </CardFooter>
          )}
        </Card>
      </DialogTrigger>
      <DialogContent className="space-y-4">
        <DialogHeader>
          <DialogTitle>{memberName}</DialogTitle>
        </DialogHeader>
        <p>{incident}</p>
        <p className="text-sm">Repeat offense: {repeatOffense ? "Yes" : "No"}</p>
        {nudge && (
          <div className="rounded bg-zinc-100 p-3 text-sm text-zinc-700">
            Suggested Action: {nudge}
          </div>
        )}
        <DialogFooterRoot>
          <DialogClose asChild>
            <button className="rounded border px-3 py-1 text-sm">Close</button>
          </DialogClose>
          <button className="rounded bg-red-600 px-3 py-1 text-sm text-white">
            Escalate
          </button>
        </DialogFooterRoot>
      </DialogContent>
    </Dialog>
  );
}
