import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const Spinner = ({ className }: { className?: string }) => (
  <Loader2 className={cn("animate-spin", className)} />
);

export { Spinner };
