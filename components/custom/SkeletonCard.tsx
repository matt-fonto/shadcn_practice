import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "../ui/skeleton";

export function SkeletonCard() {
  return (
    <div>
      <Card className="shadow-xl rounded-xl overflow-hidden transform transition-transform hover:scale-105">
        <CardHeader className="flex flex-col items-center">
          {/* Avatar */}
          <Skeleton className="w-12 h-12 rounded-full" />
          {/* Title */}
          <Skeleton className="h-6 w-1/2" />
        </CardHeader>
        <CardContent className="p-6 text-center flex flex-col gap-y-4">
          <Skeleton className="h-4 flex-grow" />
          <Skeleton className="h-4 flex-grow" />
        </CardContent>
        <CardFooter className="flex justify-center">
          <Skeleton className="h-10 w-28" />
        </CardFooter>
      </Card>
    </div>
  );
}
