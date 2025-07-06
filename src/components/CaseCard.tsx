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
    low: "bg-lime-100 text-lime-700",
    medium: "bg-amber-100 text-amber-700",
    high: "bg-rose-100 text-rose-700",
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer overflow-hidden transition-colors hover:bg-stone-50 hover:shadow-md">
          <CardHeader className="pb-1">
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
          <CardContent className="pt-0 pb-1">
            <p className="text-sm line-clamp-2">{truncated}</p>
          </CardContent>
          {nudge && (
            <CardFooter className="pt-1">
              <div className="w-full rounded bg-stone-100 px-3 py-2 text-sm text-zinc-700">
                Suggested Action: {nudge}
              </div>
            </CardFooter>
          )}
        </Card>
      </DialogTrigger>
      <DialogContent className="space-y-4 rounded-xl bg-stone-50 p-6 text-zinc-700 shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-darkGarden">{memberName}</DialogTitle>
        </DialogHeader>
        <p>{incident}</p>
        <p className="text-sm">Repeat offense: {repeatOffense ? "Yes" : "No"}</p>
        {nudge && (
          <div className="rounded-md bg-lime-100 p-2 text-sm text-darkGarden">
            Suggested Action: {nudge}
          </div>
        )}
        <DialogFooterRoot>
          <DialogClose asChild>
            <button className="rounded-md border border-zinc-300 bg-white px-4 py-1.5 text-sm text-zinc-600 hover:bg-zinc-100">Close</button>
          </DialogClose>
          <button className="rounded-md bg-rose-600 px-4 py-1.5 text-sm text-white hover:bg-rose-700">
            Escalate
          </button>
        </DialogFooterRoot>
      </DialogContent>
    </Dialog>
  );
}
