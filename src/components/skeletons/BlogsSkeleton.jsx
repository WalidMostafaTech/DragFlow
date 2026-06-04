import { Skeleton } from "@/components/ui/skeleton";

const BlogsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="rounded-xl overflow-hidden border bg-white">
          {/* Image */}
          <Skeleton className="w-full h-50 rounded-none" />

          {/* Content */}
          <div className="flex flex-col gap-4 p-4">
            {/* Title */}
            <div className="space-y-2">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-3/4" />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>

            {/* Button */}
            <Skeleton className="h-10 w-full rounded-md" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogsSkeleton;
