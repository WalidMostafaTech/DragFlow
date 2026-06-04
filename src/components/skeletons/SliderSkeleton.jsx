import { Skeleton } from "@/components/ui/skeleton";

const SliderSkeleton = () => {
  return (
    <section className="bg-secondary-foreground">
      <div className="container sectionPadding">
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap mb-6">
          <div className="flex items-center gap-2">
            <Skeleton className="w-1 h-8 rounded-full" />
            <Skeleton className="h-8 w-40" />
          </div>

          <Skeleton className="h-6 w-28" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
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

        {/* Mobile Navigation Buttons */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <Skeleton className="w-10 h-10 rounded-full" />
          <Skeleton className="w-10 h-10 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default SliderSkeleton;
