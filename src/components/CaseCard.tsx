import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { GardenCase } from "@/data/mockCases";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function CaseCard({ memberName, charge, date, nudge }: GardenCase) {
  return (
    <Card className="gap-0 border-l-4 border-lime-400 bg-white/70 backdrop-blur-sm shadow-sm">
      <CardHeader className="pb-2 flex items-center justify-between">
        <div>
          <CardTitle className="text-lg font-semibold">{memberName}</CardTitle>
          <CardDescription className="text-xs text-zinc-500">
            {new Date(date).toLocaleDateString()}
          </CardDescription>
        </div>
        {nudge && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image
                  src="/leaf-alert.svg"
                  alt="Suggested Action"
                  width={22}
                  height={22}
                  className="ml-2 cursor-pointer"
                />
              </TooltipTrigger>
              <TooltipContent
                side="bottom"
                className="max-w-xs rounded-md border border-lime-300 bg-white/90 px-4 py-2 text-sm text-olive shadow-lg backdrop-blur-md"
              >
                <div className="mt-1">{nudge}</div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </CardHeader>
      <CardContent className="py-2">
        <p>{charge}</p>
      </CardContent>
    </Card>
  );
}
