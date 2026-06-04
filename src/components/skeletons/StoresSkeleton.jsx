import { Skeleton } from "@/components/ui/skeleton";

const StoresSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col h-full gap-3 border p-4 rounded-2xl bg-white"
        >
          {/* Logo */}
          <div className="w-full aspect-video rounded-xl p-4">
            <Skeleton className="w-full h-full rounded-lg" />
          </div>

          {/* Store Name */}
          <div className="flex justify-center">
            <Skeleton className="h-6 w-32" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoresSkeleton;
