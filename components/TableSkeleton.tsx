import Skeleton from "@/components/ui/skeleton";

export default function TableSkeleton() {
  return (
    <div className="space-y-10 mt-6">
      <Skeleton className="h-10 max-w-sm" />
      <div className="space-y-2 w-full">
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2 w-full">
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2 w-full">
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2 w-full">
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2 w-full">
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  );
}
